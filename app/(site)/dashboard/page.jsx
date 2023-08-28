'use client'

import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'
const dashboard = () => {
    const [newName, setNewName]= useState('')
    const { data:session, update } = useSession()
    console.log(session)
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Hi {session?.user?.name}</p>
        <button onClick={async () => {await signOut()
        }}>Sign Out</button>
        <label>Update Your Name</label>
        <input
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        value={newName}
        onChange={(e)=> setNewName(e.target.value)} />
        <button onClick={()=> update({name: newName})}>Update Name</button>
    </div>
  )
}

export default dashboard