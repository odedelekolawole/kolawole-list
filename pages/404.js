import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() =>{
            // router.go(1) Note: that by using this i.e 1 or -1 it will redirect the use tot the next or previous page respectivelhy, is as if using the forward arrow or the backward arrow when using 1 or -1 respectively
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Oh!!!</h1>
            <h2>The page cannot be found.</h2>
            <p>Go back to the <Link href="/"> <span className="link">HomePage</span></Link></p>
        </div>
     );
}
 
export default NotFound;