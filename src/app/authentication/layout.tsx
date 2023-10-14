import Logo from "../components/logo";

const AuthLayout = ({children} : {children : React.ReactNode}) => {
    return ( 
        <div className="h-screen flex justify-center items-center">
            <div className="w-1/3 p-8 shadow-2xl rounded-md bg-slate-50">
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