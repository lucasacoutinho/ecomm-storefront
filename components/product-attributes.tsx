"use client";

import { Product } from "@/types";
import React from "react";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface ProductAttributesProps {
    product: Product;
};

const ProductAttributes: React.FC<ProductAttributesProps> = ({
    product
}) => {
    const cart = useCart();

    const onAddToCart = () => {
        cart.add(product);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={product.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>
                        {product.size.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-100" style={{backgroundColor: product.color.value }}/>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    Add to cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    )
}

export default ProductAttributes;
