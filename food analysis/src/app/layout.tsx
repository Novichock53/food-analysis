import type { Metadata } from 'next'
import ClientLayout from './ClientLayout'
import './globals.css'

export const metadata: Metadata = {
  title: '饮食分析助手',
  description: '帮助您分析和改善饮食习惯',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
