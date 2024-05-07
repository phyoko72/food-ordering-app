import Price from "@/components/Price"
import {pizzas} from "@/data"
import Image from "next/image"

export default function Product({params}: {params: {id: string}}) {
    const selectedProduct = pizzas.find(
        (pizza) => pizza.id === Number(params.id)
    )
    return (
        <div className=" flex justify-center items-center max-sm:min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] text-black p-2 ">
            <div className=" w-full h-full md:h-fit flex flex-col md:flex-row justify-between items-center">
                <div className=" w-full h-[50vh] md:h-[60vh] relative ">
                    {selectedProduct?.img && (
                        <Image
                            src={selectedProduct?.img}
                            alt={selectedProduct.title}
                            fill
                            className=" object-contain"
                        />
                    )}
                </div>
                <div className=" h-1/2 w-full flex flex-col gap-2 sm:gap-4">
                    <h1 className=" text-2xl sm:text-4xl font-bold uppercase">
                        {selectedProduct?.title}
                    </h1>
                    <p className=" sm:text-lg">{selectedProduct?.desc}</p>
                    <div>
                        <Price product={selectedProduct as ProductType} />
                    </div>
                </div>
            </div>
        </div>
    )
}
