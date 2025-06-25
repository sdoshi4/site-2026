import React, { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"

export default function signedUp() {
  const { isLoaded, isSignedIn, user } = useUser()

  const [emails, setEmails] = useState([])
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    fetchEmails()
    fetchAdmin()
  }, [isLoaded, isSignedIn])

  const fetchAdmin = async () => {
    const response = await fetch("https://n1.eohillinois.org/api/auth-admins/")
    const data = await response.json()
    console.log(data.data)
    if (data.data.find((item) => item.attributes.clerkId == user.id)) {
      setAdmin(true)
    }
  }

  const fetchEmails = async () => {
    const response = await fetch("/api/getAllVolunteerEmail")
    const data = await response.json()
    console.log(data)
    setEmails(data)
  }

  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert("Text copied to clipboard")
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="mt-60">
      {isLoaded && isSignedIn ? (
        <div>
          {admin ? (
            <div>
              {emails && (
                <div>
                  <h1>Emails</h1>
                  <button onClick={() => copyTextToClipboard(emails.join(", "))}>
                    Copy Emails
                  </button>
                  {emails.map((email, index) => (
                    <div key={index}>{email}</div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1>You are not an admin</h1>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1>You are not an admin</h1>
        </div>
      )}
      {!isLoaded && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  )
}
