import Navbar from '../component/Navbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <footer className='flex justify-center items-center'>
        <p>© 2024 My App</p>
      </footer>
    </>
  )
}