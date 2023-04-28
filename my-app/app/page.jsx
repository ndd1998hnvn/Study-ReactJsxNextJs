import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 style={{color:'red' }}> Chào mừng bạn đến với khóa học ReactJs với Nextjs cùng với Cop</h1>
      <ul>
        <li><Link href='/'>HomePage</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul>      
    </div>
  )    
}

export default HomePage;