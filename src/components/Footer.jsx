import React from "react"
import Link from "next/link"
import Image from "next/image"


const Footer = () => {

    return (
        <footer className="flex bg-black text-white gap-8 justify-center pb-20">
            <Image src="/images/logo.png" width={20} height={20} alt='logo' />
            <Link href="/terms" > Imprint </Link>
            <Link href="/privacy" > Privacy Policy </Link>
            <Link href="https://www.github.com/uc129" > Github </Link>
            <Link href="https://www.github.com/uc129" > Twitter </Link>
            <Link href="https://www.github.com/uc129" > Linkedin</Link>
        </footer>
    )


}


export default Footer