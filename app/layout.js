import { Inter } from 'next/font/google'
import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './themes/themes'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devfum',
  description: 'Software Development Company'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
