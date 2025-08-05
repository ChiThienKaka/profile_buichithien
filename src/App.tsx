import { ThemeProvider } from './components/darkmode/theme-provider'
import './index.css'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey='vite-ui-theme'>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
