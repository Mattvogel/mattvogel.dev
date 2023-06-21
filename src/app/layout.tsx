import './globals.css'

export const metadata = {
  title: 'Matthew Vogel',
  description: 'Kubernetes, Automation and general ranting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
