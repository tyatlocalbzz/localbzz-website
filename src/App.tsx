import { useState } from 'react'
import Layout from './components/layout/Layout'
import LandingPage from './components/LandingPage'
import ApproachPage from './components/ApproachPage'

type View = 'home' | 'approach'

const App = () => {
  const [currentView, setCurrentView] = useState<View>('home')

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Layout
      currentView={currentView}
      onNavigate={setCurrentView}
      onContactClick={scrollToContact}
    >
      {currentView === 'home' ? (
        <LandingPage onContactClick={scrollToContact} />
      ) : (
        <ApproachPage onContactClick={scrollToContact} />
      )}
    </Layout>
  )
}

export default App
