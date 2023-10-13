import Header from "../components/header";
import SearchBar from "../components/searchbar";

const HomeLayout = ({children} : {children : React.ReactNode}) => {
    return ( 
        <main className="min-h-screen">
            <Header/>
            <SearchBar/>
            {children}
        </main>
    );
}
 
export default HomeLayout;