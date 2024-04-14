import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Profile from "../components/dashboard/Profile";
import Posts from "../components/dashboard/Posts";
import DashSidebar from "../components/dashboard/components/Sidebar";
import Users from "../components/dashboard/Users";
// import { useUsers } from "../../hooks/useUser";

export default function Dashboard() {
  // const [loading,data] = useUsers();
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search);

  const [tab, setTab] = useState();
  useEffect((
) => {
    setTab(urlParams.get('tab'))
  }, [location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
    <div className='md:w-56'>
      {/* Sidebar */}
      <DashSidebar />
    </div>
    {/* profile... */}
    {tab === 'profile' && <Profile />}
    {/* posts... */}
    {tab === 'posts' && <Posts />}
    {/* users */}
    {tab === 'users' && <Users />}
    {/* comments  */}
    {/* {tab === 'comments' && <DashComments />} */}
    {/* dashboard comp */}
    {/* {tab === 'dash' && <DashboardComp />} */}
  </div>
  )
}