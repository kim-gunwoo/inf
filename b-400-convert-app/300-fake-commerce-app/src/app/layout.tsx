import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vite + React + TS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="drawer-content flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}