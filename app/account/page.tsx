import Link from "next/link"
import { ChevronRight, CreditCard, LogOut, Package, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6 flex items-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
        <span>Account</span>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
        <Button variant="outline" className="gap-2">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <User className="h-5 w-5" />
            <div>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Manage your personal details</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Name:</span> John Doe
              </p>
              <p>
                <span className="font-medium">Email:</span> john.doe@example.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> (123) 456-7890
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/account/profile">Edit Profile</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Package className="h-5 w-5" />
            <div>
              <CardTitle>Orders</CardTitle>
              <CardDescription>View and track your orders</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Total Orders:</span> 3
              </p>
              <p>
                <span className="font-medium">Recent Order:</span> #GH-123456
              </p>
              <p>
                <span className="font-medium">Order Status:</span>{" "}
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">Delivered</span>
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/account/orders">View Orders</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <CreditCard className="h-5 w-5" />
            <div>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment options</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Default Method:</span> Credit Card ending in 3456
              </p>
              <p>
                <span className="font-medium">Expiry:</span> 05/25
              </p>
              <p>
                <span className="font-medium">Billing Address:</span> Same as shipping
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/account/payment">Manage Payments</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Settings className="h-5 w-5" />
            <div>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Newsletter:</span> Subscribed
              </p>
              <p>
                <span className="font-medium">SMS Notifications:</span> Enabled
              </p>
              <p>
                <span className="font-medium">Language:</span> English
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/account/preferences">Edit Preferences</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

