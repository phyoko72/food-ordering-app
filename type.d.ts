type MenuType = {
    id: number
    slug: string
    title: string
    desc?: string
    img?: string
    color: string
}

type ProductType = {
    id: number
    title: string
    desc?: string
    img?: string
    price: number
    options?: {title: string; additionalPrice: number}[]
}
