'use client'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import {signIn, useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {redirect} from "next/navigation";
import Role from "@/app/components/role";

const RegisterPage = () => {

    const [showRole, setShowRole] = useState(false);
    const {data: session} = useSession();

    const handleContinueWithGoogle = () => {
        signIn("google").then(r => {})
    }

    const handleContinueWithFacebook = () => {
        signIn("facebook").then(r => {})
    }

    useEffect(() => {
        if (session) console.log("session: ", session)
        if (session) console.log("session string: ", JSON.stringify(session?.user))

        if(session) setShowRole(true);

    }, [])

    return (
        <>
            {
                showRole
                    ?
                    <div>
                        <Role/>
                    </div>
                    :
                    <div className="h-full py-5 px-10">
                        <div className="h-full flex flex-col justify-center gap-2">
                            <div className='flex justify-between items-center gap-5'>
                                <TextField
                                    id="firstname"
                                    label="firstname"
                                    value={""}
                                    variant='standard'
                                    onChange={()=>{console.log("change")}}
                                />
                                <TextField
                                    id="lastname"
                                    label="lastname"
                                    value={""}
                                    variant='standard'
                                    onChange={()=>{console.log("change")}}
                                />
                            </div>
                            <div className='flex justify-between items-center gap-5'>
                                <TextField
                                    id="username"
                                    label="username"
                                    value={""}
                                    variant='standard'
                                    onChange={()=>{console.log("change")}}
                                />
                                <TextField
                                    id="password"
                                    label="password"
                                    value={""}
                                    variant='standard'
                                    onChange={()=>{console.log("change")}}
                                />
                            </div>
                            <div className=''>
                                <TextField
                                    id="email"
                                    fullWidth={true}
                                    label="email"
                                    value={""}
                                    variant='standard'
                                    onChange={()=>{console.log("change")}}
                                />
                            </div>

                            <div className='flex justify-center items-end pt-5'>
                                <Button variant="text" color="success" className='bg-emerald-800 text-green-100 hover:bg-emerald-600 capitalize'>
                                    Register
                                </Button>
                            </div>

                            <div className='flex justify-center items-center pt-5'>
                                <p>already have account ? <span className='text-emerald-600 cursor-pointer'><Link href={'/authentication/login'}>
                            Login
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
                    </div>
            }
        </>

     );
}
 
export default RegisterPage;