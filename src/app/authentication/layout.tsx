import Logo from "../components/logo";

const AuthLayout = ({children} : {children : React.ReactNode}) => {
    return ( 
        <div className="h-screen flex justify-center items-center">
            <div className="w-1/3 shadow-2xl h-2/3 rounded-md">
                <div className="text-center p-3">
                    <Logo/>
                </div>
                {
                    children
                }
            </div>
        </div>
     );
}
 
export default AuthLayout;