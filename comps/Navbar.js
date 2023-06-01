import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" width={70} height={70} alt="image"/>
            </div>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/kolawole">Kolawole Listing</Link>

        </nav>
     );
}
 
export default Navbar;