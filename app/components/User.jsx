'use client'

import { useSession } from 'next-auth/react'

export default function User() {
    const { data: session, update } = useSession()
  return (
    <div>
        {JSON.stringify(session)}
    </div>
  )
}
