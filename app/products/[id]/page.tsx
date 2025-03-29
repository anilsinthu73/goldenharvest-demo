"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  // Get product data based on ID
  const productId = Number.parseInt(params.id)
  const product = getProductById(productId)
  const relatedProducts = getRelatedProducts(productId)

  if (!product) {
    return <div className="container py-12 text-center">Product not found</div>
  }

  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      description: product.description,
    })
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6 flex items-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
        <Link href="/products" className="text-muted-foreground hover:text-foreground">
          Products
        </Link>
        <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
        <span>{product.name}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg border bg-background">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(12 reviews)</span>
          </div>
          <div className="text-2xl font-bold">₹{product.price.toFixed(2)}</div>
          <p className="text-muted-foreground">{product.longDescription}</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center rounded-md border">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-r-none"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <div className="flex h-10 w-12 items-center justify-center text-sm font-medium">{quantity}</div>
              <Button variant="ghost" size="icon" className="rounded-l-none" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
            <Button className="flex-1 bg-[#5c8d3e] hover:bg-[#4a7232]" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 font-medium">Health Benefits:</h3>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-12">
        <TabsList className="w-full justify-start border-b pb-px">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
          <TabsTrigger value="usage">How to Use</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-4">
          <p>{product.longDescription}</p>
        </TabsContent>
        <TabsContent value="nutrition" className="py-4">
          <h3 className="text-lg font-medium mb-4">Nutritional Information (per 100g)</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nutrient</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product.nutritionFacts.map((fact, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{fact.nutrient}</TableCell>
                  <TableCell>{fact.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="usage" className="py-4">
          <p>{product.usage}</p>
        </TabsContent>
        <TabsContent value="reviews" className="py-4">
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="font-medium">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                  <div className="mb-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <Card key={relatedProduct.id} className="overflow-hidden">
              <div className="p-0">
                <Image
                  src={relatedProduct.image || "/placeholder.svg"}
                  width={400}
                  height={200}
                  alt={relatedProduct.name}
                  className="w-full object-cover h-48"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{relatedProduct.name}</h3>
                <p className="text-sm text-muted-foreground">{relatedProduct.description}</p>
                <div className="mt-2 font-bold">₹{relatedProduct.price.toFixed(2)}</div>
                <Button className="mt-2 w-full bg-[#5c8d3e] hover:bg-[#4a7232]" asChild>
                  <Link href={`/products/${relatedProduct.id}`}>View Product</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

