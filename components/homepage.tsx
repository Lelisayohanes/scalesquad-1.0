'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, ArrowRight, BarChart2, Globe, Lightbulb, Users } from "lucide-react"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="sr-only">Startup Growth Consultancy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="services">
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
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Grow Your Startup from Seed to Success
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  We provide the expertise, strategies, and tools to help your startup thrive in today's competitive market.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
                <Button variant="outline">
                  Watch Video
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-6 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2" />
                  <CardTitle>Website Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Modern, responsive websites tailored to your startup's unique needs and goals.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart2 className="h-8 w-8 mb-2" />
                  <CardTitle>Digital Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive digital marketing strategies to boost your online presence and reach.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 mb-2" />
                  <CardTitle>Business Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Expert guidance to refine your business model and scale your operations effectively.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle>Sales Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Tailored sales training to improve customer engagement and boost your revenue.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Amazing Results</CardTitle>
                  <CardDescription>TechStart Inc.</CardDescription>
                </CardHeader>
                <CardContent>
                  "The team's expertise in digital marketing helped us triple our user base in just six months!"
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Game-Changing Strategies</CardTitle>
                  <CardDescription>GrowFast Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  "Their business strategy consultation was pivotal in our successful Series A funding round."
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exceptional Service</CardTitle>
                  <CardDescription>InnovateCo</CardDescription>
                </CardHeader>
                <CardContent>
                  "From website development to sales training, they delivered beyond our expectations."
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Success Stories</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>500% Growth in 12 Months</CardTitle>
                  <CardDescription>E-commerce Startup</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Learn how we helped an e-commerce startup achieve exponential growth through our comprehensive digital marketing and business strategy services.</p>
                  <Button className="mt-4" variant="outline">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>From Idea to $1M ARR</CardTitle>
                  <CardDescription>SaaS Company</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Discover how our sales training and website development services propelled a SaaS startup from concept to $1 million in annual recurring revenue.</p>
                  <Button className="mt-4" variant="outline">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                  Ready to Accelerate Your Startup's Growth?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Book a free consultation with our experts and start your journey to success today.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Book Consultation</Button>
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