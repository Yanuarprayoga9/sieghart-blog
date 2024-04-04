import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import NotFound from './pages/404'
import PrivateRoute from './components/PrivateRoute'
import { AuthRoute } from './components/AuthRoute'

export default function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<NotFound />} />
          <Route element={<PrivateRoute />} >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<AuthRoute />} >
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}