import Link from "next/link"
import { ChevronRight, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OrdersPage() {
  const orders = [
    {
      id: "GH-123456",
      date: "March 15, 2023",
      status: "Delivered",
      total: "$83.94",
      items: 3,
    },
    {
      id: "GH-123455",
      date: "February 28, 2023",
      status: "Delivered",
      total: "$45.99",
      items: 2,
    },
    {
      id: "GH-123454",
      date: "January 12, 2023",
      status: "Delivered",
      total: "$67.50",
      items: 4,
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6 flex items-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
        <Link href="/account" className="text-muted-foreground hover:text-foreground">
          Account
        </Link>
        <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
        <span>Orders</span>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Orders</h1>
          <p className="text-muted-foreground">View and track your orders</p>
        </div>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4 space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                  <CardDescription>Placed on {order.date}</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/account/orders/${order.id}`}>View Details</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <span>
                      {order.items} {order.items === 1 ? "item" : "items"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:items-end">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Status:</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Total:</span>
                      <span>{order.total}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="processing" className="mt-4">
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No orders currently processing</p>
          </div>
        </TabsContent>
        <TabsContent value="shipped" className="mt-4">
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No orders currently shipped</p>
          </div>
        </TabsContent>
        <TabsContent value="delivered" className="mt-4 space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                  <CardDescription>Placed on {order.date}</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/account/orders/${order.id}`}>View Details</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <span>
                      {order.items} {order.items === 1 ? "item" : "items"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:items-end">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Status:</span>
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Total:</span>
                      <span>{order.total}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

