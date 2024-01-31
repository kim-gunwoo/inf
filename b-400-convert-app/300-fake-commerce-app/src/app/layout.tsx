import { Metadata } from 'next'
import NavigationBar from '../components/NavigationBar'
import '../index.css'

export const metadata: Metadata = {
  title: 'Vite + React + TS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="drawer-content flex flex-col">
            <NavigationBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}