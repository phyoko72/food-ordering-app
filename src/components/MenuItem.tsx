import Link from "next/link"

export default function MenuItem({menu}: {menu: MenuType}) {
    return (
        <Link
            href={`/menu/${menu.slug}`}
            style={{backgroundImage: `url(${menu.img})`}}
            className="even:text-black bg-cover w-full h-1/3 md:h-3/4 flex-1 p-2 md:p-4"
        >
            <div className=" w-1/2 h-full">
                <h1 className=" text-2xl font-bold uppercase">{menu.title}</h1>
                <p className=" text-sm my-3">{menu.desc}</p>
                <button className=" hidden lg:block btn">Explore</button>
            </div>
        </Link>
    )
}
