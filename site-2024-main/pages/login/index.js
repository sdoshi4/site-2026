import React, { useEffect } from "react"
import { SignIn, useUser, SignUpButton } from "@clerk/nextjs"

export default function login() {
  //   const { isSignedIn } = useUser()

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      {/* {isSignedIn ? <SignIn /> : <SignUpButton />} */}
      <SignIn />
    </div>
  )
}
