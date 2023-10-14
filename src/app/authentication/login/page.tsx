'use client'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from 'next/link'
const Login = () => {
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
            <div className='flex justify-center items-center pt-5'>
                <p>don't have account ? <span className='text-emerald-600 cursor-pointer'><Link href={'/authentication/register'}>
                        Register
                    </Link></span>
                </p>
            </div>
            <div className='flex justify-center items-end pt-5'>
                <Button variant="text" color="success" className='bg-emerald-800 text-green-100 hover:bg-emerald-600 capitalize'>
                Login
                </Button>
            </div>
            
        </div>
     );
}
 
export default Login;