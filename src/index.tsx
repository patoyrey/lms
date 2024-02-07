import ReactDom from 'react-dom/client'
import { AppRouter } from './AppRouter'
import React from 'react'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <AppRouter />
    </React.StrictMode>
)