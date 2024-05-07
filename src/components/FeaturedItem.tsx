import Image, {StaticImageData} from "next/image"

export default function FeaturedItem({
    image,
    title,
    desc,
    price,
}: {
    image: string
    title: string
    desc: string
    price: number
}) {
    return (
        <div className=" hover:bg-fuchsia-200 transition-colors out ease-in-out duration-300 border flex flex-col gap-y-3 p-4 items-center w-screen sm:w-[50vw] md:w-[33vw] h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
            <div className=" relative w-full flex-1 hover:rotate-45 transition-transform duration-300">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className=" object-contain"
                />
            </div>
            <div className=" flex-1 flex flex-col gap-2 justify-around items-center">
                <h1 className=" md:text-lg lg:text-2xl font-bold">{title}</h1>
                <p className=" text-sm sm:text-base text-center">{desc}</p>
                <strong className=" text-sm">${price}</strong>
                <button className="btn">Add to Cart</button>
            </div>
        </div>
    )
}
