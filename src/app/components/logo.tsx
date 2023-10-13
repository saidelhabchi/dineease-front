import { lobster } from "../layout";

const Logo = () => {
    return ( 
        <>
            <h1 className={lobster.className + " text-4xl mx-10"}>
                <span className="text-emerald-600 ">Dine</span><span className="text-green-950">Ease</span>
            </h1>
        </>
     );
}
 
export default Logo;