import MenuItem from "@/components/MenuItem"
import {menu} from "@/data"

export default function Menu() {
    return (
        <div className=" flex justify-center items-center h-[calc(100vh-6rem)] px-5 md:px-10">
            <div className=" flex max-md:flex-col border-2 border-green-600 text-white h-full md:h-[60vh]">
                {menu.map((item) => (
                    <MenuItem menu={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}
