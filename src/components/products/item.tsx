'use client'
import { Product } from "@/types/products"
import { Button } from "../ui/button"

type Props = {
    item: Product
}
export const ProductItem = ({ item }: Props) => {

    const handleAddButton = () => {

    }
    return (
        <div>
            <div className="rounded-md overflow-hidden ">
                <img
                    className="w-full h-32 object-cover"
                    src={item.image}
                    alt={item.name}
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">R${item.price.toFixed(2)}</p>
                <Button
                    variant="outline"
                    onClick={handleAddButton}
                >
                    Adicionar
                </Button>
            </div>
        </div>
    )
}