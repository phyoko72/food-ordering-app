"use client"
import Image from "next/image"
import open from "@/../public/open.png"
import close from "@/../public/close.png"
import {useState} from "react"
import Link from "next/link"
import CartIcon from "./CartIcon"

const links = [
    {id: 1, title: "Homepage", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working Hours", url: "/"},
    {id: 4, title: "Contact", url: "/"},
]

export default function Menu() {
    const [isOpened, setIsOpened] = useState(false)
    const user = false
    return (
        <div className=" cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
            <Image
                src={isOpened ? close : open}
                width={20}
                height={20}
                alt="Open"
            />
            {isOpened && (
                <div className=" absolute top-24 bg-red-500 h-[calc(100vh-6rem)] right-0 left-0 flex justify-center items-center text-3xl text-white z-20">
                    <ul className=" text-center">
                        {links.map((item) => (
                            <li
                                key={item.id}
                                className=" my-5"
                                onClick={() => setIsOpened(false)}
                            >
                                <Link href={item.url}>{item.title}</Link>
                            </li>
                        ))}
                        <li
                            className=" my-5"
                            onClick={() => setIsOpened(false)}
                        >
                            {user ? (
                                <Link href={"/orders"}>Orders</Link>
                            ) : (
                                <Link href={"/login"}>Login</Link>
                            )}
                        </li>
                        <li onClick={() => setIsOpened(false)}>
                            <CartIcon />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
