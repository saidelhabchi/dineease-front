import Header from "../components/header";
import SearchBar from "../components/searchbar";
import {useSession} from "next-auth/react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const HomeLayout = ({children} : {children : React.ReactNode}) => {

    const session = getServerSession(authOptions);

    return ( 
        <main className="min-h-screen">
            <Header session={session}/>
            <SearchBar/>
            {children}
        </main>
    );
}
 
export default HomeLayout;