"use client"
import Image from "next/image"
import slide1 from "@/../public/slide1.png"
import slide2 from "@/../public/slide2.png"
import slide3 from "@/../public/slide3.jpg"
import {useEffect, useState} from "react"

const slides = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot",
        image: slide1,
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: slide2,
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: slide3,
    },
]

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prev) =>
    //             prev === slides.length - 1 ? 0 : prev + 1
    //         )
    //     }, 3000)
    //     return () => clearInterval(interval)
    // }, [])

    return (
        <div className=" h-[calc(100vh-6rem)] bg-fuchsia-50 flex max-md:flex-col justify-between items-center">
            <div className=" flex-1 w-full h-full flex justify-center items-center">
                <div className=" flex flex-col justify-center items-center gap-6">
                    <h1 className=" uppercase md:p-10 text-primary font-bold text-xl sm:text-3xl md:text-5xl text-center">
                        {slides[currentSlide].title}
                    </h1>
                    <button className=" bg-primary text-white p-3 rounded-sm">
                        Order Now
                    </button>
                </div>
            </div>
            <div className=" flex-1 bg-green-500 relative h-full w-full ">
                <Image
                    src={slides[currentSlide].image}
                    alt="slide2"
                    fill
                    objectFit="cover"
                />
            </div>
        </div>
    )
}
