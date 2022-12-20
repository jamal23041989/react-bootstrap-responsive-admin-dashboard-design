import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import Dashboard from './pages/Dashboard'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import SideBarContainer from './components/Layout/SideBarContainer'
import Transactions from './pages/Transactions'

import './assets/scss/app.scss'

const App = () => {
  library.add(fas)

  return (
    <>
      <Router>
        <Header />
        <SideBarContainer />
        <div className="main-content">
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
