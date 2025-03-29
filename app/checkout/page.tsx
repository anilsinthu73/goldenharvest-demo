"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronRight, CreditCard, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const shipping = 5.99
  const total = subtotal + shipping

  const handlePlaceOrder = () => {
    // In a real app, you would process the payment here
    clearCart()
    router.push("/order-confirmation")
  }

  if (items.length === 0) {
    return (
      <div className="container px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="mb-6">Add some products to your cart before proceeding to checkout.</p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6 flex items-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
        <Link href="/cart" className="text-muted-foreground hover:text-foreground">
          Cart
        </Link>
        <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
        <span>Checkout</span>
      </div>

      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-6 flex">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step >= 1 ? "bg-[#5c8d3e] text-white" : "border bg-muted text-muted-foreground"
              }`}
            >
              1
            </div>
            <div className="mx-4 h-0.5 flex-1 self-center bg-muted" />
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step >= 2 ? "bg-[#5c8d3e] text-white" : "border bg-muted text-muted-foreground"
              }`}
            >
              2
            </div>
            <div className="mx-4 h-0.5 flex-1 self-center bg-muted" />
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step >= 3 ? "bg-[#5c8d3e] text-white" : "border bg-muted text-muted-foreground"
              }`}
            >
              3
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
                <CardDescription>Enter your shipping details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" value={formData.address} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" value={formData.city} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="NY" value={formData.state} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="10001" value={formData.zip} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="United States" value={formData.country} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto bg-[#5c8d3e] hover:bg-[#4a7232]" onClick={() => setStep(2)}>
                  Continue to Payment
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose your payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                    <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" value={formData.cvc} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input
                        id="nameOnCard"
                        placeholder="John Doe"
                        value={formData.nameOnCard}
                        onChange={handleChange}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="pt-4">
                    <div className="flex flex-col items-center justify-center space-y-4 py-8">
                      <div className="text-center text-muted-foreground">
                        You will be redirected to PayPal to complete your payment.
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="apple" className="pt-4">
                    <div className="flex flex-col items-center justify-center space-y-4 py-8">
                      <div className="text-center text-muted-foreground">
                        You will be redirected to Apple Pay to complete your payment.
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button className="bg-[#5c8d3e] hover:bg-[#4a7232]" onClick={() => setStep(3)}>
                  Review Order
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Review Order</CardTitle>
                <CardDescription>Please review your order before placing it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-2 font-medium">Shipping Information</h3>
                  <div className="rounded-lg border p-4 text-sm">
                    <p>
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p>{formData.address}</p>
                    <p>
                      {formData.city}, {formData.state} {formData.zip}
                    </p>
                    <p>{formData.country}</p>
                    <p>{formData.email}</p>
                    <p>{formData.phone}</p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Payment Method</h3>
                  <div className="rounded-lg border p-4 text-sm">
                    <div className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Credit Card ending in {formData.cardNumber.slice(-4) || "3456"}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Order Items</h3>
                  <div className="rounded-lg border p-4 text-sm">
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span>
                            {item.name} ({item.quantity})
                          </span>
                          <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button className="bg-[#5c8d3e] hover:bg-[#4a7232]" onClick={handlePlaceOrder}>
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.name} ({item.quantity})
                    </span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg bg-muted p-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                <span>Secure Checkout</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

