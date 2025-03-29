import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter">All Products</h1>
              <p className="text-muted-foreground">Browse our collection of premium raw powders</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-full md:w-auto">
                <Input placeholder="Search products..." className="pr-8" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      width={400}
                      height={200}
                      alt={product.name}
                      className="w-full object-cover h-48 transition-transform hover:scale-105"
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <CardTitle className="text-lg hover:text-[#5c8d3e] transition-colors">{product.name}</CardTitle>
                  </Link>
                  <CardDescription>{product.description}</CardDescription>
                  <div className="mt-2 font-bold">₹{product.price.toFixed(2)}</div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <AddToCartButton product={product} />
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous Page</span>
              </Button>
              <Button variant="outline" size="sm" className="bg-[#5c8d3e] text-white hover:bg-[#4a7232]">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next Page</span>
              </Button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}

