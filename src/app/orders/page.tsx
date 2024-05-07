import {orders} from "@/data"

export default function Orders() {
    return (
        <div className="px-5 md:px-10">
            <table className=" table-auto w-full border-separate border-spacing-2">
                <thead>
                    <tr className=" text-left">
                        <th className=" hidden md:block">Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className=" hidden md:block">Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr
                            key={order.id}
                            className=" text-sm md:text-base [&>td]:py-4 [&>td]:px-1 odd:bg-gray-200 first:bg-fuchsia-200"
                        >
                            <td className=" hidden md:block">{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.price}</td>
                            <td className=" hidden md:block">
                                {order.products}
                            </td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
