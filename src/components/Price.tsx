"use client"

import {useEffect, useState} from "react"

export default function Price({product}: {product: ProductType}) {
    const [currentOption, setCurrentOption] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(product.price)

    useEffect(() => {
        setTotalPrice(
            (product?.price + product.options![currentOption].additionalPrice) *
                quantity
        )
    }, [currentOption, quantity])

    return (
        <div className=" flex flex-col gap-2">
            <div>
                {product.options && (
                    <span className=" font-bold sm:text-lg">
                        &#36;
                        {totalPrice.toFixed(2)}
                    </span>
                )}
            </div>
            <div>
                {product?.options?.map((option, index) => (
                    <button
                        className={`p-2 border rounded me-4 ${
                            index === currentOption
                                ? "bg-primary text-white"
                                : "border-primary text-primary"
                        } `}
                        key={option.title}
                        onClick={() => {
                            setCurrentOption(index)
                        }}
                    >
                        {option.title} / &#36;{option.additionalPrice}
                    </button>
                ))}
            </div>
            <div className="flex">
                <div className=" border border-primary text-primary p-1 flex justify-between items-center flex-grow">
                    <span>Quantity</span>
                    <div className=" flex gap-4 items-center">
                        <span
                            className={` select-none ${
                                quantity === 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : "opacity-100 cursor-pointer"
                            } `}
                            onClick={() => {
                                setQuantity((prev) =>
                                    prev > 1 ? prev - 1 : prev
                                )
                            }}
                        >
                            &lt;
                        </span>
                        <span className=" select-none">{quantity}</span>
                        <span
                            className=" cursor-pointer select-none"
                            onClick={() => {
                                setQuantity((prev) => prev + 1)
                            }}
                        >
                            &gt;
                        </span>
                    </div>
                </div>
                <button className="add-cart-btn">Add to cart</button>
            </div>
            {/* <div>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="Quantity"
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className=" border-2 p-2 w-1/2 outline-none placeholder:text-primary placeholder:opacity-60"
                />
                <button className="btn">Add to cart</button>
            </div> */}
        </div>
    )
}
