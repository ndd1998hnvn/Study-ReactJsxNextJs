import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Team about',
    description: 'Web Development tutorial and course',  
  }

const TeamPage = () => {
  return (
    <div>
        <button><Link href='/'>{`<<`}Back to HomePage</Link></button>
        <h1>This is eam Page</h1>
        <p>FrontEnd Team</p>
    </div>
  )
}

export default TeamPage