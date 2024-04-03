import { useSelector } from "react-redux"

export default function Dashboard() {
  const state = useSelector(state => state.value)
  console.log(state)
  return (
    <div>Dashboard</div>
  )
}