import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'About',
  }
const AboutPage = () => {
  return (
    <div>
        <button><Link href='/'>Back</Link></button>
        <h1>This is About Page</h1>
        <p>Create by Cop from ASP-FE team</p>
    </div>
  )
}

export default AboutPage