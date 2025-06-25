import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Content from "@/content";
import Button from "@/button";

export default function FieldTripsPage() {
  return (
    <Content title="Field Trips">
      <div className="lg:flex">
        <img
          className="w-48 h-48 mx-auto lg:mr-10 mb-10"
          src="assets/background/children.png"
          alt="Children illustration"
        />
        <div className="lg:col-span-3 mb-10 text-center">
          <p className="font-montserrat text-lg">
            This year, we are asking for your estimated time of arrival to
            campus to help us plan traffic management. Please fill out this
            short form to let us know you're coming:
          </p>
          <Button
            type="big"
            className="px-6 py-3 rounded-md drop-shadow-md mt-6 text-lg font-semibold"
            href="https://forms.gle/4Qj5k3fuEGXhs77RA"
            target="_blank"
          >
            Registration Form
          </Button>
        </div>
      </div>

      <div className="text-center mx-auto max-w-3xl">
        <h1 className="title text-3xl font-bold mb-4">MSDC and HSDC</h1>
        <p className="font-montserrat text-lg">
          Our Middle School and High School Design Competitions (MSDC and HSDC)
          are engineering-focused competitions on <b>Friday, April 4</b>.
          Students work in teams of 3-5 to create a design and presentation that
          will be evaluated at the end of the competition. It’s a great
          opportunity for students to gain hands-on engineering design and
          teamwork experience!
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <Button
            type="big"
            className="px-6 py-3 rounded-md drop-shadow-md text-lg font-semibold"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd2fJYy1U5IZj5itydIiZhaLBCScJIMVwY6_qIAD3jvTn3VFA/viewform?usp=dialog"
            target="_blank"
          >
            MSDC Registration
          </Button>
          <Button
            type="big"
            className="px-6 py-3 rounded-md drop-shadow-md text-lg font-semibold"
            href="https://forms.gle/LsS9fqGW2QNSMwm67"
            target="_blank"
          >
            HSDC Registration
          </Button>
        </div>
      </div>

      {/* Bus Drop-Off & Parking Section */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Bus Drop-Off & Parking</h2>

        <h3 className="text-lg font-semibold mb-2">For Field Trip Buses:</h3>
        <p className="font-montserrat text-lg">
          Buses should arrive via <b>Mathews Street</b> and drop off students
          there, following directions from EOH volunteers.
        </p>
        <p className="font-montserrat text-lg mt-2">
          After drop-off, buses will park in <b>Lot B22</b> (corner of Goodwin
          Street and University Street, east of the Parking Department
          building).
        </p>
        <p className="font-montserrat text-lg mt-2">
          At the end of the day, EOH will have <b>shuttles</b> running from campus
          to <b>B22</b> to bring students back to their buses for departure.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">For Visitors Arriving in Cars:</h3>
        <p className="font-montserrat text-lg">
          Parking is available in the <b>State Farm Center Lot E14</b>. A
          designated <b>EOH shuttle</b> will transport visitors to the main event
          area.
        </p>
		<p className="font-montserrat text-lg mt-2">
		Visitors may also drop off near EOH and then proceed to park in <b>E14</b>.
		</p>
		</div>

		<div className="flex justify-center gap-6 mt-6">
		<img
			className="w-1/2 md:w-1/3 rounded-md shadow-md"
			src="assets/images/b22.png"
			alt="Parking at B22 illustration"
		/>
		<img
			className="w-1/2 md:w-1/3 rounded-md shadow-md"
			src="assets/images/e14.png"
			alt="Parking at E14 illustration"
		/>
		</div>
    <div className="flex justify-center gap-6 mt-6">
    <img
			className="w-1/2 md:w-1/3 rounded-md shadow-md"
			src="assets/images/shuttle.png"
			alt="Shuttle Information"
		/>
    </div>


      {/* FAQs Section */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqCard key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </Content>
  );
}

// FAQ Data
const faqData = [
  {
    question: "What should we plan on doing throughout the day?",
    answer: (
      <>
        <p>
          Schools’ schedules are flexible! We recommend checking out our{" "}
          <b>Recommended Events for K-12 Visitors</b> and planning your day
          around your group’s interests.
        </p>
        <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow">
          <h4 className="font-semibold text-center mb-2">Example Schedule:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><b>8:00-9:00 AM</b> - Bus to EOH</li>
            <li><b>9:00-10:00 AM</b> - Explore student exhibits</li>
            <li><b>10:30-11:00 AM</b> - Watch Illinois Space Society’s Rocket Launch</li>
            <li><b>11:30 AM-12:00 PM</b> - Drive an Excavator with Caterpillar</li>
            <li><b>12:00-1:00 PM</b> - Lunch</li>
            <li><b>1:00-1:30 PM</b> - Learn to Solder</li>
            <li><b>1:30-2:00 PM</b> - Explore student exhibits</li>
            <li><b>2:00-2:15 PM</b> - Gather at bus loading zone</li>
            <li><b>2:15-3:15 PM</b> - Bus back to school</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    question: "What should we plan on doing for lunch?",
    answer: (
      <>
        <p>
		There are a variety of restaurants and food trucks on campus during EOH! Guests are also welcome to pack lunch and eat around campus at our several designated outdoor areas. There will be tables and tents set up near our food trucks as well as grassy areas for groups to sit. 
		Unfortunately, we cannot assign or guarantee specific locations to specific groups because of the large number of guests attending. There are also indoor eating spaces available in the basement of the Illini Union.
        </p>
        <h4 className="font-semibold mt-4">Food Trucks at EOH:</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Dave’s Dogs</li>
          <li>Pastamania</li>
          <li>Kona Ice</li>
          <li>Travelin’ Tom’s Coffee</li>
          <li>La Paloma</li>
          <li>Jurassic Grill</li>
          <li>Juanitos Tacos</li>
          <li>+ More!</li>
        </ul>
		<h4 className="font-semibold mt-4">Some Nearby Restaurants (within ~10 minute walk):</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Panda Express</li>
          <li>Mia Za’s: Pizza, Sandwiches, Pasta</li>
          <li>Shawarma Joint: Casual Mediterranean food, chipotle style</li>
          <li>Subway</li>
          <li>Jimmy Johns</li>
          <li>Noodles & Co</li>
          <li>Chipotle</li>
          <li>Murphy’s: American style pub food</li>
		  <li>Thai Fusion: Casual Thai food</li>
		  <li>Atomic Wings: Chicken wings and sandwiches</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do we handle safety concerns?",
    answer: (
      <>
        <li><b>Missing Child:</b> In the case of a lost/missing child: Notify the visitor’s booth nearest to you that you have custody of a lost child. A volunteer will bring the lost child to the visitor’s booth in CIF, notify 911, and meet the reporting person and the lost child there. This is where a parent/ guardian can meet the child.
		</li>
        <li><b>Medical Concerns:</b> In case of injury, immediately notify any nearby volunteer and go to the EMS tent on Graziano Plaza, in between Engineering Hall and Everitt Laboratory.
		</li>
        <li><b>Local Hospitals:</b> Carle Foundation Hospital, OSF Heart of Mary Medical Hospital.</li>
      </>
    ),
  },
];

// FAQ Card Component (Collapsible)
function FaqCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md transition-all hover:bg-gray-200">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {open && <div className="mt-3 text-sm font-montserrat">{answer}</div>}
    </div>
  );
}