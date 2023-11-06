import './globals.css'

export const metadata = {
  title: 'Sekar WG',
  description: 'Sekar WG',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-white'>
      <body>{children}</body>
    </html>
  )
}
