import { Outlet,Navigate } from "react-router-dom"
const AuthLayout = () => {
 const isAuthenticated =false;
 return(
  //this below is react fragment in <></>
  <>
  {isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <>
    <div className="flex justify-center items-center h-screen">
  <div className="w-1/2 p-6 flex justify-center items-center">
  <section>
    <Outlet />
  </section>
  </div> 
  <div className="w-1/2 h-full">
    <img
      src="/assets/images/side.svg"
      alt="logo"
      className="h-full w-full object-cover bg-no-repeat"
    />
  </div>
</div>
    </>
  )}
</>
);
}

export default AuthLayout