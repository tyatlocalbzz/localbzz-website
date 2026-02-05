import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LandingPage from './components/LandingPage'

// Lazy load non-critical pages for better initial load
const ApproachPage = lazy(() => import('./components/ApproachPage'))
const PrepPage = lazy(() => import('./components/PrepPage'))
const WorksheetPage = lazy(() => import('./components/WorksheetPage'))

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-paper">
    <div className="w-8 h-8 border-4 border-brand-dark border-t-transparent rounded-full animate-spin" />
  </div>
)

const AppContent = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Determine if we're on a main page (with layout) or a standalone page
  const isStandalonePage = ['/prep', '/worksheet'].includes(location.pathname)
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

  // Standalone pages (no header/footer)
  if (isStandalonePage) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/prep" element={<PrepPage />} />
          <Route path="/worksheet" element={<WorksheetPage />} />
        </Routes>
      </Suspense>
    )
  }

  // Main pages with layout
  return (
    <Layout
      currentView={currentView}
      onNavigate={handleNavigate}
      onContactClick={scrollToContact}
    >
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage onContactClick={scrollToContact} />} />
          <Route path="/approach" element={<ApproachPage onContactClick={scrollToContact} />} />
        </Routes>
      </Suspense>
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
