// Things that appear on EVERY page go here
// Navbar, Footer, Fonts, Providers, global styles

import '@/app/global.css'
import Navbar from './component/Navbar'

export const metadata = {
  title: 'My Todo App',
  description: 'A simple todo app built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='w-full h-screen'>

        <Navbar/>

        {/* Your page.tsx renders here */}
        {children}

        {/* Footer — shows on every page */}
        <footer className='flex justify-center items-center'>
          <p>© 2024 My App</p>
        </footer>

      </body>
    </html>
  )
}