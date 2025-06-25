import React, { useEffect } from "react"
import { SignOutButton } from "@clerk/nextjs"

export default function LogOut() {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <SignOutButton />
    </div>
  )
}
