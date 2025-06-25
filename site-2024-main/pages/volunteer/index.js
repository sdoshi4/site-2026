import React, { useState, useEffect } from "react";
import { auth, provider, firestore, signInWithPopup, signOut, collection, getDocs, doc, getDoc, updateDoc, arrayUnion } from "/utilities/firebase";


export default function Volunteer() {
  const [user, setUser] = useState(null);
  const [volunteerEvents, setVolunteerEvents] = useState([]);
  const [requiredEventsSignedUp, setRequiredEventsSignedUp] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status
  const [eventEmails, setEventEmails] = useState({}); // State to store event emails
  const [allEventEmails, setAllEventEmails] = useState([]);

  useEffect(() => {
    // Check if user is signed in
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);

      // Check if user is admin (example: check for admin email domain)
      if (firebaseUser) {
        const isAdminUser = firebaseUser.email === 'tusharj2004@gmail.com' || firebaseUser.email === 'kpact2@illinois.edu' || firebaseUser.email === 'shaandoshi4@gmail.com' || firebaseUser.email === 'aliciak2@illinois.edu' || firebaseUser.email === 'azh4@illinois.edu' || firebaseUser.email === 'atsig2@illinois.edu' || firebaseUser.email === 'arryank2@illinois.edu';
        setIsAdmin(isAdminUser);
      } else {
        setIsAdmin(false);
      } 
    });

    // Fetch volunteer events from Firestore
    const fetchVolunteerEvents = async () => {
      const eventsRef = collection(firestore, "volunteerEvents");
      const snapshot = await getDocs(eventsRef);
      const events = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVolunteerEvents(events);
    };

    fetchVolunteerEvents();
    return () => unsubscribe();
  }, []);

  // Function to fetch event emails when admin button is clicked
  const handleViewEventEmails = async (eventId) => {
    const eventRef = doc(firestore, "volunteerEvents", eventId);
    const eventDoc = await getDoc(eventRef);
    if (eventDoc.exists()) {
      const eventData = eventDoc.data();
      if (eventData.volunteers) {
        const emails = eventData.volunteers.map(volunteer => volunteer.email);
        setEventEmails(prevState => ({
          ...prevState,
          [eventId]: emails
        }));
      }
    }
  };

  const fetchAllEventEmails = async () => {
    let allEmailsSet = new Set(); // Using a Set to avoid duplicates
    
    for (const event of volunteerEvents) {
      const eventRef = doc(firestore, "volunteerEvents", event.id);
      const eventDoc = await getDoc(eventRef);
      
      if (eventDoc.exists()) {
        const eventData = eventDoc.data();
        
        if (eventData.volunteers) {
          eventData.volunteers.forEach((volunteer) => {
            allEmailsSet.add(volunteer.email); // Add each email to the Set
          });
        }
      }
    }
    
    const uniqueEmails = Array.from(allEmailsSet); // Convert Set back to array
    
    setAllEventEmails(uniqueEmails); // Update state with unique emails
  };
  

  const handleCloseEmails = () => {
    setShowEmails(false); // Hide emails when "Close Emails" button is clicked
  };

  // Render function for displaying event emails
  const renderEventEmails = (eventId) => {
    if (eventEmails[eventId]) {
      return (
        <div>
          <p>Emails:</p>
          <ul>
            {eventEmails[eventId].map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  // Sign in with Google
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Check if user is already signed up for an event
  const isUserSignedUp = (event) => {
    return event.volunteers?.some((volunteer) => volunteer.uid === user?.uid);
  };

  // Check if user is signed up for one of the required events (Thursday Set Up, Thursday Set Up 2, Saturday Tear Down, Saturday Tear Down 2)
  const isRequiredEventSignedUp = () => {
    const requiredEvents = ["Thursday Set Up", "Thursday Set Up 2", "Saturday Tear Down", "Saturday Tear Down 2"];
    return volunteerEvents.some((event) => requiredEvents.includes(event.name) && isUserSignedUp(event));
  };

  // Handle signing up or unsigning up
  const handleSignUpOrUnsignUp = async (event) => {
    if (!user) {
      alert("Please sign in to volunteer.");
      return;
    }

    // Ensure user is signed up for one of the required events before signing up for other events
    if (!isRequiredEventSignedUp() && !["Thursday Set Up", "Thursday Set Up 2", "Saturday Tear Down", "Saturday Tear Down 2"].includes(event.name)) {
      alert("You must sign up for one of the required events (Thursday Set Up, Thursday Set Up 2, Saturday Tear Down, Saturday Tear Down 2) before signing up for other events.");
      return;
    }

    const eventId = event.id;
    const eventRef = doc(firestore, "volunteerEvents", eventId);

    try {
      let updatedVolunteers = [...(event.volunteers || [])];

      // Check if user is already signed up
      if (isUserSignedUp(event)) {
        // Remove user from volunteers
        updatedVolunteers = updatedVolunteers.filter((volunteer) => volunteer.uid !== user.uid);
      } else {
        // Check if maximum capacity is reached
        if (event.maxCapacity && event.volunteers.length >= event.maxCapacity) {
          alert("Sorry, this event is already full.");
          return;
        }

        // Add user to volunteers
        updatedVolunteers.push({
          uid: user.uid,
          name: user.displayName || "",
          email: user.email || "",
        });
      }

      // Update Firestore
      await updateDoc(eventRef, { volunteers: updatedVolunteers });

      // Update state immediately
      setVolunteerEvents((prevEvents) =>
        prevEvents.map((e) => (e.id === eventId ? { ...e, volunteers: updatedVolunteers } : e))
      );

      // If user signed up for any required event, update state
      if (!requiredEventsSignedUp) {
        setRequiredEventsSignedUp(isRequiredEventSignedUp());
      }
    } catch (error) {
      console.error("Error signing up/unsigning up for event:", error);
      alert("Error signing up, try again!");
    }
  };

  return (
    <div className="w-screen mt-32 mb-16 flex justify-center items-center flex-col overflow-y-scroll">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 p-4 mb-6 mx-4 w-11/12 md:w-7/12 rounded shadow-md space-y-3">
  <div>
    <p className="font-semibold">📣 Required Sign Ups</p>
    <p className="text-sm mt-1">
      If you were not able to attend a Town Hall please Slack, Text, or Email Hospitality Directors <strong>Arryan</strong> (217-649-5875) or <strong>Kate</strong> (847-532-2909) by <strong>Monday 11:59PM</strong> to schedule a meeting time! 
    </p>
  </div>

  <div>
    <p className="font-semibold">📘 Volunteer Guide</p>
    <p className="text-sm mt-1">
      Make sure to read the guide before your shift. <br />
      <a
        href="https://docs.google.com/document/d/1bAC8b2-VK7Y-jxBrhISY9rC_hndycAWxqviNPZNY3ik/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View Volunteer Guide →
      </a>
    </p>
  </div>

  <div>
    <p className="font-semibold">💬 Join the Slack</p>
    <p className="text-sm mt-1">
      Stay updated and ask questions in our Slack group. <br />
      <a
        href="https://join.slack.com/t/eohvolunteeri-vec8800/shared_invite/zt-301htu91v-1aXOcbbJMOKwAtdu_KehxA"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Join Slack →
      </a>
    </p>
  </div>
</div>
      <h1 className="font-bold text-3xl">Volunteer Sign Up</h1>
      <br />
      {user ? (
        <div className="w-7/12">
          <h1 className="flex items-center gap-1">
            Welcome {user.displayName ? user.displayName.split(' ')[0] : user.email.split('@')[0]}
            <button onClick={handleSignOut} className="underline text-600 hover:text-blue-800">
              (Sign Out)
            </button>
          </h1>
          <div className="font-montserrat">
            Please sign up for a shift at EOH 2025! We need all the help we can get to make this event a success. We will be in contact with you as the event approaches to give you more information about your shift. Thank you for your interest in volunteering!
          </div>

          {/* Display Events in Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {volunteerEvents.map((event) => (
              <div key={event.id} className="p-4 border rounded shadow text-center">
                <h2 className="font-bold text-lg">{event.name}</h2>
                {event.time && <p><strong>Time: {event.time}</strong></p>}
                {event.description && <p>Description: {event.description}</p>}
                <p>Volunteers: {event.volunteers?.length || 0} / {event.maxCapacity || "N/A"}</p>
                {["Friday Robobrawl", "Saturday Robobrawl"].includes(event.name) ? (
  <button
    disabled
    className="mt-2 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed opacity-70"
  >
    Sign Up
  </button>
) : (
  <button
    onClick={() => handleSignUpOrUnsignUp(event)}
    className={`mt-2 px-4 py-2 ${isUserSignedUp(event) ? 'bg-[#a2d3c2] hover:bg-[#8fb8a8]' : 'bg-[#c578d6] hover:bg-[#a864b3]'} text-white rounded`}
  >
    {isUserSignedUp(event) ? 'Unsign Up' : 'Sign Up'}
  </button>
)}

              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          <p className="text-center">Please sign in to volunteer</p>
          <button onClick={handleSignIn} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
            Sign In with Google
          </button>
        </div>
      )}
      {/* Admin button to view emails */}
      {isAdmin && (
  <div className="mt-8 w-7/12">
    <h2 className="text-xl font-bold text-center mb-4">Admin Section</h2>

    {/* Fetch All Emails & Close All Emails Buttons */}
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={fetchAllEventEmails}
        className="px-4 py-2 bg-[#c578d6] hover:bg-[#a864b3] text-white rounded"
      >
        Fetch All Event Emails
      </button>
      {allEventEmails.length > 0 && (
        <button
          onClick={() => setAllEventEmails([])}
          className="px-4 py-2 bg-[#c578d6] hover:bg-[#a864b3] text-white rounded"
        >
          Close All Emails
        </button>
      )}
    </div>

    {/* Display All Emails */}
    {allEventEmails.length > 0 && (
      <div className="bg-gray-100 p-4 border rounded shadow mb-8">
        <h3 className="font-semibold mb-2">All Event Emails:</h3>
        <textarea
          className="w-full p-2 border rounded"
          rows="5"
          readOnly
          value={allEventEmails.join(", ")}
        />
      </div>
    )}

    {/* Individual Event Email Blocks */}
    <div className="grid gap-4">
      {volunteerEvents.map((event) => (
        <div
          key={event.id}
          className="p-4 border rounded shadow bg-gray-100"
        >
          <h3 className="font-semibold text-lg mb-2">{event.name}</h3>

          {/* Toggle Button */}
          <button
            onClick={() =>
              eventEmails[event.id]
                ? setEventEmails((prev) => {
                    const updated = { ...prev };
                    delete updated[event.id];
                    return updated;
                  })
                : handleViewEventEmails(event.id)
            }
            className="px-4 py-2 bg-[#c578d6] hover:bg-[#a864b3] text-white rounded"
          >
            {eventEmails[event.id] ? 'Close Emails' : 'View Emails'}
          </button>

          {/* Display Event Emails if Expanded */}
          {eventEmails[event.id] && (
            <div className="mt-4">
              <p className="text-sm font-semibold">Emails (Copy-Paste):</p>
              <textarea
                className="w-full mt-2 p-2 border rounded"
                rows="4"
                readOnly
                value={eventEmails[event.id].join(", ")}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
}