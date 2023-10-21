
import { redirect } from "next/navigation";
import { lobster } from "../layout";
import LoginButton from "./loginButton";
import Logo from "./logo";
import LogoutButton from "@/app/components/logoutButton";

const Header = (props) => {

    console.log(props)

    return ( 
        <header className="flex justify-between items-center h-20 border-b border-green-800 border-opacity-50">
            <Logo/>
            {
                props.session  ?
                    <LogoutButton/>
                    :
                    <LoginButton/>
            }
        </header>
     );
}
 
export default Header;