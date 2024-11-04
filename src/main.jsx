import { createRoot } from 'react-dom/client'

import {AppRouter} from './AppRouter.jsx'

import './App.css'
import { SessionProvider } from './context/SessionProvider'

createRoot(document.getElementById('root')).render(
  <SessionProvider>
    <AppRouter />
  </SessionProvider>
)