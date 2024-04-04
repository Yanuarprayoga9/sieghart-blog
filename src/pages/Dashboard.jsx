import { useDispatch, useSelector } from "react-redux"
// import {  } from "../redux/user/user-slice";
import PageContainer from "../components/PageContainer";

export default function Dashboard() {
  const state = useSelector(state => state.user)
  console.log(state)
  const dispatch = useDispatch();

  const onClicked = () => {
    // dispatch(loginSuccess())
  }
  return (
    <div>
      <PageContainer title={'Dashboardil Page'}>
         <h1>test</h1>
      </PageContainer>
    </div>
  )
}