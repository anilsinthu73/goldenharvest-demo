"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function OrderConfirmationPage() {
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: "",
    orderDate: "",
    items: [] as { name: string; quantity: number; price: number }[],
    subtotal: 0,
    shipping: 5.99,
    total: 0,
    shippingInfo: {
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
      email: "john.doe@example.com",
    },
  })

  useEffect(() => {
    // In a real app, this would come from the server or previous checkout step
    const orderNumber = "GH-" + Math.floor(100000 + Math.random() * 900000)
    const orderDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Mock order items
    const items = [
      { name: "Beetroot Powder", quantity: 2, price: 12.99 },
      { name: "Spinach Powder", quantity: 1, price: 14.99 },
      { name: "Blueberry Powder", quantity: 3, price: 18.99 },
    ]

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const total = subtotal + 5.99 // shipping

    setOrderDetails({
      orderNumber,
      orderDate,
      items,
      subtotal,
      shipping: 5.99,
      total,
      shippingInfo: {
        name: "John Doe",
        address: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
        email: "john.doe@example.com",
      },
    })
  }, [])

  return (
    <div className="container flex flex-col items-center px-4 py-12 md:px-6 md:py-16">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#5c8d3e]">
        <CheckCircle className="h-10 w-10 text-white" />
      </div>
      <h1 className="mb-2 text-3xl font-bold">Order Confirmed!</h1>
      <p className="mb-8 text-center text-muted-foreground">
        Thank you for your order. We&apos;ve received your order and will begin processing it soon.
      </p>

      <Card className="mb-8 w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
          <CardDescription>Order #{orderDetails.orderNumber}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Order Date:</span>
            <span>{orderDetails.orderDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shipping Method:</span>
            <span>Standard Shipping (3-5 business days)</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Payment Method:</span>
            <span>Credit Card ending in 3456</span>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-medium">Items Ordered</h3>
            <div className="space-y-2">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>
                    {item.name} ({item.quantity})
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${orderDetails.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${orderDetails.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${orderDetails.total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Shipping Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p>{orderDetails.shippingInfo.name}</p>
            <p>{orderDetails.shippingInfo.address}</p>
            <p>
              {orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.state} {orderDetails.shippingInfo.zip}
            </p>
            <p>{orderDetails.shippingInfo.country}</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2 rounded-lg bg-muted p-4 text-muted-foreground">
          <Package className="h-5 w-5" />
          <span>
            You will receive an email confirmation and shipping updates at{" "}
            <span className="font-medium">{orderDetails.shippingInfo.email}</span>
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/account/orders">View Order History</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

