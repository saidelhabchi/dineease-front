'use client'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const RegisterPage = () => {
    return ( 
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
                <div className='flex justify-center items-center pt-5'>
                    <p>already have account ? <span className='text-emerald-600 cursor-pointer'><Link href={'/authentication/login'}>
                            Login
                        </Link></span>
                    </p>
                </div>
                <div className='flex justify-center items-end pt-5'>
                    <Button variant="text" color="success" className='bg-emerald-800 text-green-100 hover:bg-emerald-600 capitalize'>
                        Register
                    </Button>
                </div>
                
            </div>
        </div>
     );
}
 
export default RegisterPage;