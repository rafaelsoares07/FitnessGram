import AuthLayout from "./_auth/AuthLayout"
import SignInForm from "./_auth/forms/SignInForm"
import SignUpForm from "./_auth/forms/SignUpForm"
import RootLayout from "./_root/RootLayout"
import {Home} from "./_root/pages"

import "./index.css"

import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <main className="flex h-screen" >
        <Routes>

            {/* Rotas publicas da aplicacao */}
            <Route element={<AuthLayout/>}>
              <Route path="/sign-in" element={<SignInForm/>}/>
              <Route path="/sign-up" element={<SignUpForm/>}/>
            </Route>


            {/* Rotas privadas da aplicacao */}
            <Route element={<RootLayout/>}>
              <Route index element={<Home/>}/>
            </Route>
            
            <Route path="*" element={<h1>Nao existe essa pagina</h1>}/>

        </Routes>
    </main>
  )
}