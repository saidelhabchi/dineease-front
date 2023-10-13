'use client'

import { useRouter } from "next/navigation"

const LoginButton = () => {
    const router = useRouter()
    const handleLogin = ()=>{
        router.push('/authentication/login')
    }
    return ( 
        <>
        <button className="mx-10 px-8 py-2 bg-emerald-700 text-white rounded-lg shadow-lg" onClick={handleLogin}>
                Login
        </button>
        </>
     );
}
 
export default LoginButton;