import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { products } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"

export default function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5e6]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">GOLDEN HARVEST</h1>
                <h2 className="text-2xl font-semibold text-[#5c8d3e]">Organic Raw Powders</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Purely Organic, Naturally Powerful, The Gold Standard in Raw Powders.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button className="bg-[#5c8d3e] hover:bg-[#4a7232]">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/logo.png"
                width={300}
                height={300}
                alt="Golden Harvest Raw Products"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our most popular raw powders, packed with nutrients and flavor.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id}>
                <CardHeader className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    width={400}
                    height={200}
                    alt={product.name}
                    className="w-full object-cover rounded-t-lg h-48"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <div className="mt-2 font-bold">₹{product.price.toFixed(2)}</div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <AddToCartButton product={product} />
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5e6]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our Products?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our commitment to quality and purity sets us apart.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5c8d3e]">
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
                  className="h-8 w-8 text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">100% Natural</h3>
              <p className="text-muted-foreground">
                No additives, preservatives, or artificial ingredients. Just pure nature.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5c8d3e]">
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
                  className="h-8 w-8 text-white"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Nutrient-Rich</h3>
              <p className="text-muted-foreground">
                Packed with vitamins, minerals, and antioxidants for optimal health.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5c8d3e]">
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
                  className="h-8 w-8 text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Sustainably Sourced</h3>
              <p className="text-muted-foreground">
                Ethically harvested and processed to preserve both nature and nutrients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Promise</h2>
            </div>
            <div className="max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                "At Golden Harvest, we are dedicated to bringing you the finest, all-natural raw powders from nature's
                most nutrient-rich fruits and leaves. With our premium offerings, including banana, carrot, lemon,
                coconut, beetroot, moringa, tomato, curry leaves, and papaya, we promise to deliver exceptional quality
                and freshness in every product. Our commitment is to provide you with pure, wholesome, and powerful
                powders that support your health, enhance your well-being, and bring the goodness of nature straight to
                your table. Trust Golden Harvest for products that are as nourishing as they are natural."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

