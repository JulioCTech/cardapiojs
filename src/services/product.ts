import { Product } from "@/types/products";
import { products } from "@/data/products"

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}