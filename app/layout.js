import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Full Stack Dev Portfolio',
  description: 'Portfolio for a full stack SaaS developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Navbar />
        <main className="p-6 max-w-5xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
