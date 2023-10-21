'use client'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from 'next/link'
import {signIn, useSession} from "next-auth/react";
import {useEffect} from "react";
import {redirect} from "next/navigation";


const Login = () => {

    const {data: session} = useSession();

    const handleContinueWithGoogle = () => {
        signIn("google").then(r => {})
    }

    const handleContinueWithFacebook = () => {
        signIn("facebook").then(r => {})
    }

    useEffect(() => {
        if(session) console.log("session: ", Object.keys(session))

        if(session?.user) redirect("/home")

    }, [])

    return (
        <div className="h-full py-5 px-10">
            <div>
                <TextField
                fullWidth={true}
                id="email"
                label="email"
                value={""}
                variant='standard'
                onChange={()=>{console.log("change")}} 
                />
            </div>
            <div>
                <TextField
                fullWidth={true}
                id="password"
                label="password"
                value={""}
                variant='standard'
                onChange={()=>{console.log("change")}}  
                />
            </div>

            <div className='flex justify-center items-end pt-5'>
                <Button variant="text" color="success" className='bg-emerald-800 text-green-100 hover:bg-emerald-600 capitalize'>
                    Login
                </Button>
            </div>

            <div className='flex justify-center items-center pt-5'>
                <p>don't have account ? <span className='text-emerald-600 cursor-pointer'><Link href={'/authentication/register'}>
                        Register
                    </Link></span>
                </p>
            </div>

            <div className="my-5 p-1.5">
                <div className="flex justify-center">Or continue with:</div>

                <div className="flex justify-evenly items center p-3">

                    <button onClick={handleContinueWithGoogle}
                            className="group h-12 p-6 rounded-md transition duration-300 shadow-xl hover:border-none hover:shadow-3xl">
                        <div className="relative flex items-center space-x-4 justify-center">
                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                 className="absolute left-0 w-10" alt="google logo"/>
                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition
                                            duration-300 group-hover:text-grn sm:text-base"></span>
                        </div>
                    </button>

                    <button onClick={handleContinueWithFacebook}
                            className="group h-12 p-6 rounded-md transition duration-300 shadow-md hover:border-none hover:shadow-3xl">
                        <div className="relative flex items-center space-x-4 justify-center">
                            <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                                 className="absolute left-0 w-10" alt="Facebook logo"/>
                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition
                            duration-300 group-hover:text-grn sm:text-base"></span>
                        </div>
                    </button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Login;