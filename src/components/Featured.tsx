import {featuredProducts} from "@/data"
import FeaturedItem from "./FeaturedItem"

export default function Featured() {
    return (
        <div className="overflow-x-scroll bg-fuchsia-50">
            <div className=" flex w-max">
                {featuredProducts.map((product) => (
                    <FeaturedItem
                        key={product.id}
                        title={product.title}
                        image={product.img as string}
                        price={product.price}
                        desc={product.desc as string}
                    />
                ))}
            </div>
        </div>
    )
}
