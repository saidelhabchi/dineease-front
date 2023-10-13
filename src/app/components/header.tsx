
import { redirect } from "next/navigation";
import { lobster } from "../layout";
import LoginButton from "./loginButton";
import Logo from "./logo";

const Header = () => {
    
    return ( 
        <header className="flex justify-between items-center h-20 border-b border-green-800 border-opacity-50">
            <Logo/>
            <LoginButton/>
        </header>
     );
}
 
export default Header;