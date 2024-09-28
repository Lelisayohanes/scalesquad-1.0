'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Globe } from "lucide-react"

export function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Globe className="h-6 w-6" />
          <span className="sr-only">Startup Growth Consultancy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              Pricing Plans
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Choose the perfect plan to fuel your startup's growth.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$999/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Basic website development
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      SEO optimization
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Social media setup
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Monthly strategy call
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$2,499/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Advanced website development
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Comprehensive digital marketing
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Business strategy consulting
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Weekly strategy calls
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Basic sales training
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Full-scale website and app development
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Advanced digital marketing campaigns
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      In-depth business strategy and planning
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      On-demand strategy consultations
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Comprehensive sales training program
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Dedicated account manager
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Us</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Can I upgrade or downgrade my plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Is there a long-term contract?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>No, our services are provided on a month-to-month basis. You can cancel at any time without penalty.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do you offer customized solutions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our Enterprise plan is fully customizable to meet your specific needs. Contact us for a tailored solution.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What kind of support is included?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>All plans include email support. The Growth and Enterprise plans also include phone and video call support.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Growth Journey?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Choose the plan that's right for you and let's get started.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Startup Growth Consultancy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}