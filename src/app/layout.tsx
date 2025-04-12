import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata = {
  title: 'Validify - Connecting Retailers with Technology',
  description: 'Validify helps retailers embrace new technology solutions and AI to transform their business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
