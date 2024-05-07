import Image from "next/image"
import burger from "@/../public/offerProduct.png"

export default function Offer() {
    return (
        <div className=" h-screen w-full flex max-md:flex-col items-center justify-center  bg-offer ">
            <div className=" flex-1 h-full w-full max-sm:p-2 flex flex-col justify-center items-center gap-4 border-2 border-fuchsia-400 text-white">
                <h1 className=" text-center text-xl sm:text-2xl md:text-4xl font-bold">
                    Delicious Burger & French Fry
                </h1>
                <p className=" text-sm md:text-lg text-center">
                    Progressively simplify effective e-toilers and
                    process-centric methods of empowerment. Quickly pontificate
                    parallel.
                </p>
                <button className="btn">Order Now</button>
            </div>
            <div className=" flex-1 h-full w-full relative">
                <Image
                    src={burger}
                    alt="burger"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}
