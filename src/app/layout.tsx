import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/next"

<Analytics />
export const metadata: Metadata = {
  title: 'Sukhbir Singh | DevOps Engineer Portfolio',
  description: 'Premium developer portfolio for Sukhbir Singh — DevOps Engineer, Full Stack Developer, and cloud-focused builder.',
  keywords: ['Sukhbir Singh', 'DevOps Engineer', 'Full Stack Developer', 'AWS', 'Kubernetes', 'Jenkins', 'Portfolio'],
  openGraph: {
    title: 'Sukhbir Singh | DevOps Engineer Portfolio',
    description: 'Building scalable systems, automating workflows, and deploying innovation.',
    type: 'website'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
