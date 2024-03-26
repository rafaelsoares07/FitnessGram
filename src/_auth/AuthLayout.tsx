import { Outlet, Navigate } from "react-router-dom"

export default function AuthLayout() {

  const isAutheticated = false;

  return (
    <>
      {isAutheticated ?(
        <Navigate to="/"/>
      ):(
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet/>
          </section>

          <img 
          src="../public/images/side-section.jpg"
          className="hidden xl:block h-screen xl:w-1/2 object-cover bg-no-repeat" 
          />
        </>
      )}
    </>
  )
}
