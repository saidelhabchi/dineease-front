import LoginButton from "./loginButton";
import Logo from "./logo";
import LogoutButton from "@/app/components/logoutButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const Header = async () => {

    const session = await getServerSession(authOptions);

    console.log(session)

    return ( 
        <header className="flex justify-between items-center h-20 border-b border-green-800 border-opacity-50">
            <Logo/>
            {
                Object.keys(session).length > 0  ?
                    <LogoutButton/>
                    :
                    <LoginButton/>
            }
        </header>
     );
}
 
export default Header;