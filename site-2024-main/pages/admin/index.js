import React, { use, useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import AdminDashboard from "./AdminDashboard"

export default function SettingsForm() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [admin, setAdmin] = useState(false)
  useEffect(() => {
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

  return (
    <div className="mt-60">
      {isLoaded && isSignedIn ? (
        <div>
          {admin ? (
            <div>
              <AdminDashboard />
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
