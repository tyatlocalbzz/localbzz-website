import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LandingPage from './components/LandingPage'
import ApproachPage from './components/ApproachPage'

const AppContent = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentView = location.pathname === '/approach' ? 'approach' : 'home'

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigate = (view: 'home' | 'approach') => {
    navigate(view === 'home' ? '/' : '/approach')
  }

  return (
    <Layout
      currentView={currentView}
      onNavigate={handleNavigate}
      onContactClick={scrollToContact}
    >
      <Routes>
        <Route path="/" element={<LandingPage onContactClick={scrollToContact} />} />
        <Route path="/approach" element={<ApproachPage onContactClick={scrollToContact} />} />
      </Routes>
    </Layout>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
