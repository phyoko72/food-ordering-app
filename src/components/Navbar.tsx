import Link from "next/link"
import Image from "next/image"
import Menu from "./Menu"
import CartIcon from "./CartIcon"
import phone from "@/../public/phone.png"

export default function Navbar() {
    const user = false
    return (
        <div className=" flex justify-around items-center border-b-2 border-b-red-300 h-12 text-primary md:h-20 px-5 md:px-10">
            <div className="hidden md:flex gap-3 flex-1">
                <Link href={"/"}>Home</Link>
                <Link href={"/menu"}>Menu</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>
            <div className=" flex-1 md:text-center">
                <Link
                    href={"/"}
                    className=" text-lg font-bold text-primary uppercase"
                >
                    Pizza Hut
                </Link>
            </div>
            <div className=" md:hidden">
                <Menu />
            </div>
            <div className="hidden md:flex flex-1 gap-3 justify-end items-center ">
                <div className=" md:absolute top-3 right-3 lg:static flex justify-center items-center bg-yellow-500 rounded px-1 text-white">
                    <Image src={phone} alt="phone" width={15} height={15} />
                    <span>+123456789</span>
                </div>
                {user ? (
                    <Link href={"/orders"}>Orders</Link>
                ) : (
                    <Link href={"/login"}>Login</Link>
                )}
                <CartIcon />
            </div>
        </div>
    )
}
