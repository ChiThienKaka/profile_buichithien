import { ThemeProvider } from './components/darkmode/theme-provider'
import './index.css'
import MainLayout from './layouts/MainLayout'
import "./styles/global.css";
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey='vite-ui-theme'>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
