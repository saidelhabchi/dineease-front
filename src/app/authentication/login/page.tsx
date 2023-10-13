'use client'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
const Login = () => {
    return ( 
        <div className="h-full p-16">
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
            <div>
                <Button variant="text" color="success">
                Login
                </Button>
            </div>
        </div>
     );
}
 
export default Login;