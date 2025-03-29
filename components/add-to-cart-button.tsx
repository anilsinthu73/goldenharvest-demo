"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function AddToCartButton({ product }: { product: any }) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      description: product.description,
    })
  }

  return (
    <Button className="w-full bg-[#5c8d3e] hover:bg-[#4a7232]" onClick={handleAddToCart}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  )
}

