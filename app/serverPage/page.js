import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function page(){
  const session = await getServerSession(authOptions)
  return (
    <>
      {session?.user?.address}
      {session?.user?.name}
      {session?.user?.email}

      <br />
      {JSON.stringify(session)}
    </>
  )
}