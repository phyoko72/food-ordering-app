import {featuredProducts} from "@/data"
import Image from "next/image"

const pizzas = featuredProducts.slice(0, 5)

export default function Cart() {
    return (
        <div className=" h-screen w-full flex flex-col sm:flex-row p-1">
            <div className=" sm:w-3/5 lg:w-full h-1/2 sm:h-full overflow-y-auto bg-green-200 flex flex-col justify-evenly gap-2 ">
                {pizzas.map((pizza) => (
                    <div
                        key={pizza.id}
                        className="first w-full h-full bg-orange-400 flex justify-between items-center gap-2"
                    >
                        <div className=" relative w-[30%] h-full">
                            <Image
                                src={pizza.img || ""}
                                alt="pizza"
                                fill
                                className=" object-contain"
                            />
                        </div>
                        <div className=" w-[40%] bg-slate-300 text-left">
                            <h1 className=" font-bold md:text-lg">
                                {pizza.title}
                            </h1>
                            <span className=" text-sm">Large</span>
                        </div>
                        <div className=" w-[30%] flex justify-between sm:justify-around">
                            <span>${pizza.price}</span>
                            <button>X</button>
                        </div>
                    </div>
                ))}
                {/* <div className="second w-full h-full bg-orange-400  flex justify-between items-center gap-2">
                    <div className=" relative w-[30%] h-dvh">
                        <Image
                            src={"/temporary/p10.png"}
                            alt="pizza"
                            fill
                            className=" object-contain"
                        />
                    </div>
                    <div className=" w-[40%] bg-slate-300 text-left">
                        <h1 className=" font-bold text-lg">Silica Pizza</h1>
                        <span className=" text-sm">Large</span>
                    </div>
                    <div className=" w-[30%] flex justify-around">
                        <span>$24.90</span>
                        <span>x</span>
                    </div>
                </div>
                <div className="third w-full h-full bg-orange-400 flex justify-between items-center gap-2">
                    <div className=" relative w-[30%] h-full">
                        <Image
                            src={"/temporary/p10.png"}
                            alt="pizza"
                            fill
                            className=" object-contain"
                        />
                    </div>
                    <div className=" w-[40%] bg-slate-300 text-left">
                        <h1 className=" font-bold text-lg">Silica Pizza</h1>
                        <span className=" text-sm">Large</span>
                    </div>
                    <div className=" w-[30%] flex justify-around">
                        <span>$24.90</span>
                        <span>x</span>
                    </div>
                </div>
                <div className="fourth w-full h-full bg-orange-400 flex justify-between items-center gap-2">
                    <div className=" relative w-[30%] h-full">
                        <Image
                            src={"/temporary/p10.png"}
                            alt="pizza"
                            fill
                            className=" object-contain"
                        />
                    </div>
                    <div className=" w-[40%] bg-slate-300 text-left">
                        <h1 className=" font-bold text-lg">Silica Pizza</h1>
                        <span className=" text-sm">Large</span>
                    </div>
                    <div className=" w-[30%] flex justify-around">
                        <span>$24.90</span>
                        <span>x</span>
                    </div>
                </div> */}
            </div>
            <div className=" sm:w-2/5 lg:w-full h-1/2 sm:h-full bg-fuchsia-200">
                <div className=" w-full h-full flex flex-col justify-center gap-3 p-2 sm:p-5 ">
                    <div className=" flex justify-between items-center">
                        <h2>
                            Subtotal <span>{"(3 items)"}</span>{" "}
                        </h2>
                        <span>$81.70</span>
                    </div>
                    <div className=" flex justify-between items-center">
                        <h2>Service Cost</h2>
                        <span>$0.00</span>
                    </div>
                    <div className=" flex justify-between items-center">
                        <h2>Delivery Cost</h2>
                        <span className=" text-green-500 font-semibold">
                            FREE!
                        </span>
                    </div>
                    <hr />
                    <div className=" flex justify-between items-center">
                        <h2>Total {"(INCL. VAT)"}</h2>
                        <span className=" font-bold">$81.70</span>
                    </div>
                    <div className=" flex justify-end">
                        <button className=" sm:w-1/2 p-2 bg-primary rounded text-white ">
                            CHECK OUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
