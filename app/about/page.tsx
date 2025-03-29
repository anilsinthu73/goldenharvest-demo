import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          <Image src="/images/logo.png" width={150} height={150} alt="Golden Harvest Logo" className="mb-4" />
          <h1 className="text-4xl font-bold">About Golden Harvest</h1>
          <p className="max-w-3xl text-muted-foreground">The Gold Standard in Raw Powders</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Golden Harvest was founded with a simple mission: to bring the purest, most nutritious raw powders from
                nature's bounty to your table. Based in Srikakulam, Andhra Pradesh, we specialize in creating premium
                quality raw powders from organic fruits, vegetables, and herbs.
              </p>
              <p>
                Our journey began with a passion for natural wellness and a commitment to preserving the nutritional
                integrity of nature's gifts. Today, we're proud to offer a diverse range of products that support health
                and well-being while maintaining the highest standards of quality and sustainability.
              </p>
              <p>
                Every Golden Harvest product is carefully processed to retain maximum nutrients, ensuring you receive
                all the benefits nature intended. We believe in transparency, quality, and the power of pure, natural
                ingredients.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Our facility"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Promise</h2>
          <div className="bg-[#f8f5e6] p-6 rounded-lg">
            <p className="text-muted-foreground italic text-center">
              "At Golden Harvest, we are dedicated to bringing you the finest, all-natural raw powders from nature's
              most nutrient-rich fruits and leaves. With our premium offerings, including banana, carrot, lemon,
              coconut, beetroot, moringa, tomato, curry leaves, and papaya, we promise to deliver exceptional quality
              and freshness in every product. Our commitment is to provide you with pure, wholesome, and powerful
              powders that support your health, enhance your well-being, and bring the goodness of nature straight to
              your table. Trust Golden Harvest for products that are as nourishing as they are natural."
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#5c8d3e]" />
                <CardTitle>FSSAI Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Licensed by Food Safety and Standards Authority of India (License Number: 10125001000050)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#5c8d3e]" />
                <CardTitle>MSME Registered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Registered under UDYAM (Registration Number: UDYAM-AP-09-0028600)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#5c8d3e]" />
                <CardTitle>100% Natural</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All our products are 100% natural with no additives, preservatives, or artificial ingredients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=150&width=150"
                width={150}
                height={150}
                alt="Arjunkumar Bandari"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Arjunkumar Bandari</h3>
            <p className="text-muted-foreground">Founder & CEO</p>
            <p className="mt-4 max-w-2xl text-center text-muted-foreground">
              With a passion for natural wellness and sustainable agriculture, Arjunkumar founded Golden Harvest to
              bring the purest, most nutritious raw powders to health-conscious consumers worldwide.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-[#5c8d3e] hover:bg-[#4a7232]">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

