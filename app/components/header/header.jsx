import Image from "next/image";
import Link from "next/link";


export default function Header() {
    return (
        <header className="header">
        <Link href="/">
            <a>
            <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
            />
            </a>
        </Link>
        </header>
    );
    }