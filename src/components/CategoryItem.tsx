import Image from "next/image"
import Link from "next/link"

export default function CategoryItem({product}: {product: ProductType}) {
    return (
        <Link
            href={`/products/${product.id}`}
            className=" w-full h-[50vh] sm:w-1/2 lg:w-1/3 border-2 p-4 text-primary even:bg-fuchsia-50"
        >
            <div className=" flex flex-col gap-4 h-full">
                <div className="relative h-full">
                    <Image
                        src={product.img || ""}
                        alt={product.title}
                        fill
                        className=" object-contain"
                    />
                </div>
                <div className=" flex justify-between items-center">
                    <h1 className=" font-bold text-lg uppercase">
                        {product.title}
                    </h1>
                    <span className=" font-semibold">${product.price}</span>
                </div>
            </div>
        </Link>
    )
}
