import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome learn ReactJs by Cop</h1>
      <ul>
        <li><Link href='/'>HomePage</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul>
    </div>
  )    
}

export default HomePage;