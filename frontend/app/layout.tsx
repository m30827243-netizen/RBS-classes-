import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RBS Classes - Learn. Practice. Grow.',
  description: 'Complete Education Ecosystem - Learn, Practice, and Achieve your goals',
  keywords: 'education, learning, courses, tests, online coaching',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-primary-600 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}
