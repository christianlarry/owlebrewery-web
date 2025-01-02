import { Outlet } from "react-router-dom"

interface Props{
  children?:React.ReactNode
}

const MainLayout = ({
  children
}:Props)=>{
  return (
    <div> 
      {children || <Outlet/>}
    </div>
  )
}

export default MainLayout