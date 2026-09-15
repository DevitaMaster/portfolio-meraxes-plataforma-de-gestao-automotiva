import { Routes, Route } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import Home from './pages/Home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
