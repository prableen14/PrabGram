import { AuthLayout } from './_auth/AuthLayout';
import SignInForm  from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';
import './globals.css';
import { Route,Routes } from 'react-router-dom';
const App = () => {
  return (
    <main className="text-3xl font-bold underline">
  <Routes>
    {/* public Routes */}
    <Route element={<AuthLayout/>}>
    <Route path="/sign-up" element={<SignUpForm/>}/>
    <Route path="/sign-in" element={<SignInForm/>}/>
    </Route>
    {/* private routes */}
    <Route element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    </Route>
  </Routes>
  </main>
  )
}

export default App