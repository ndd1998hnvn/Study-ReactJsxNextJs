import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Learn React Native by Cop',
  description: 'Web Development tutorial and course',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='container'>{children}</main></body>
    </html>
  )
}
