'use client'

import {signOut, useSession} from "next-auth/react";

function LogoutButton(props) {

    const {data: session} = useSession();

    const handleLogout = () => {
        if (Object.keys(session).length > 0){
            signOut({ callbackUrl: `http://localhost:3000/authentication/login` })
                .then(r => {})
        }

        if(window.localStorage.getItem("token-auth")){
            window.localStorage.removeItem("token-auth");
        }
    }

    return (
        <>
            <button
                onClick={handleLogout}
                className="mx-10 px-8 py-2 bg-emerald-700 text-white rounded-lg shadow-lg">
                Logout
            </button>
        </>
    );
}

export default LogoutButton;