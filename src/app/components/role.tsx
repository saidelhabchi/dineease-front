'use client'

import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useState} from "react";
import {useSession} from "next-auth/react";
import { useRouter } from "next/navigation";

const Role = (props) => {

    const [role, setRole] = useState("");

    const {data: session} = useSession();
    const router = useRouter();

    const handleChange = (e) => {
        console.log(e.target.value)
        setRole(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (session) console.log("session : ", session?.user)
        console.log("submit : ", role)

        if (session?.user) {
            fetch(
                `/api/oauth/connect`,
                {
                    method: 'POST',
                    headers: {'Content-Type': "application/json"},
                    body: JSON.stringify({user: session?.user, role})
                }
            ).then(r => {
                    return r.json()
                }
            ).then(data => {
                console.log(data)

                window.localStorage.setItem("token-auth", data.token)

                router.push("/home")
            })
            .catch(e => {
                console.log("role error : ", e)
                router.push("/authentication/login")
            })
        }
    }

    return (
        <div className='bg-gray-100 flex justify-center p-14'>
            <form method='POST' className='flex flex-col justify-center p-7' onSubmit={handleSubmit}>
                <FormControl >
                    <FormLabel id="label"
                               className='text-3xl'
                               sx={{ color: '#073a3b', '&.Mui-checked': {color: '#047172'}}}>
                        What is your position?
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        defaultValue="Customer"
                        onChange={handleChange}
                    >
                        <FormControlLabel value="ROLE_CUSTOMER" control={<Radio sx={{ color: '#073a3b', '&.Mui-checked': {color: '#047172'}}} />} label="Customer" />
                        <FormControlLabel value="ROLE_MANAGER" control={<Radio sx={{ color: '#073a3b', '&.Mui-checked': {color: '#047172'}}} />} label="Restaurant Owner" />
                    </RadioGroup>
                </FormControl>

                <button className='mx-10 px-8 py-2 bg-emerald-700 text-white rounded-lg shadow-lg' type='submit'>
                    Done
                </button>
            </form>
        </div>
    );
}

export default Role;