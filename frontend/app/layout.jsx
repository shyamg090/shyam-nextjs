// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shyamg',
  description: 'This is a Personal Portfolio website developed by Shyam_G ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
