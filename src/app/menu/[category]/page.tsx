import CategoryItem from "@/components/CategoryItem"
import {pizzas} from "@/data"

export default function Category() {
    return (
        <div className="flex flex-wrap">
            {pizzas.map((pizza) => (
                <CategoryItem product={pizza} key={pizza.id} />
            ))}
        </div>
    )
}
