'use client'

import dynamic from 'next/dynamic'
import '../index.css'
import { BrowserRouter } from 'react-router-dom'

const App = dynamic(() => import('../App'), { ssr: false })

export default function Page() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}