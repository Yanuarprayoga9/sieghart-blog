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

import axios from 'axios';
import baseUrl from '../constant/baseUrl.js';
import FooterCom from './components/Footer.jsx'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute.jsx'
import CreatePost from './components/dashboard/CreatePost.jsx'
import UpdatePost from './components/dashboard/UpdatePost.jsx'
import PostPage from './pages/PostPage.jsx'
import Search from './pages/search.jsx'

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token");
  config.headers["Authorization"] = `Bearer ${token}`;
  config.baseURL = baseUrl;
  return config;
});
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route element={<PrivateRoute />} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AuthRoute />} >
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />} >
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
      <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}