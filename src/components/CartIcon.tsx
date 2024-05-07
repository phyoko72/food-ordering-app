import Image from "next/image"
import cart from "@/../public/cart.png"
import Link from "next/link"

export default function CartIcon() {
    return (
        <Link href={"/cart"} className=" flex items-center gap-4">
            <div className=" relative w-8 h-8 md:w-5 md:h-5">
                <Image src={cart} alt="cart" fill />
            </div>

            <h1>Cart (3) </h1>
        </Link>
    )
}
