import type { Metadata } from 'next'
import StyledComponentsRegistry from './registry'

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
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PingFang+SC:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ 
        margin: 0,
        fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
