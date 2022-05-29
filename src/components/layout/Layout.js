import { Outlet } from "react-router-dom";
import Navigation from './../navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <div style={{ marginLeft: '300px' }}>
        <Outlet />
      </div>
    </>
  )
}
export default Layout;