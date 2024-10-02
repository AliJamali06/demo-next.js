import Link from "next/link";
const Header = () => {
    return(
        <header className="header">
            <ul className="header-buttons">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/contact-us">Contact us</Link></li>
                <li><Link href={"/jobs"}>Jobs</Link></li>            
                <li><Link href="https://www.governorsindh.com/jobs">Results</Link></li>
            </ul>
        </header>
    );
}

export default Header;