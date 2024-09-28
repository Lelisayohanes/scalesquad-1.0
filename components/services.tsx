'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, BarChart2, Lightbulb, Users, ArrowRight } from "lucide-react"

export function Services() {
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
              Our Services
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Comprehensive solutions to fuel your startup's growth at every stage.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2">
              <Card className="w-full">
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2" />
                  <CardTitle className="text-2xl">Website Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    We create modern, responsive websites tailored to your startup's unique needs and goals. Our
                    websites are designed to convert visitors into customers and grow your online presence.
                  </p>
                  <ul className="list-disc list-inside text-gray-500 mb-4">
                    <li>Custom design and development</li>
                    <li>Responsive and mobile-friendly</li>
                    <li>SEO optimization</li>
                    <li>E-commerce integration</li>
                  </ul>
                  <Button variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <BarChart2 className="h-8 w-8 mb-2" />
                  <CardTitle className="text-2xl">Digital Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Our comprehensive digital marketing strategies are designed to boost your online presence,
                    attract more customers, and drive growth for your startup.
                  </p>
                  <ul className="list-disc list-inside text-gray-500 mb-4">
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Social Media Marketing</li>
                    <li>Content Marketing</li>
                    <li>Pay-Per-Click (PPC) Advertising</li>
                  </ul>
                  <Button variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <Lightbulb className="h-8 w-8 mb-2" />
                  <CardTitle className="text-2xl">Business Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    We provide expert guidance to help you refine your business model, scale your operations,
                    and achieve your growth goals.
                  </p>
                  <ul className="list-disc list-inside text-gray-500 mb-4">
                    <li>Market analysis and positioning</li>
                    <li>Growth strategy development</li>
                    <li>Financial planning and forecasting</li>
                    <li>Operational optimization</li>
                  </ul>
                  <Button variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle className="text-2xl">Sales Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Our tailored sales training programs help your team develop strong sales skills, improve
                    customer engagement, and boost revenue.
                  </p>
                  <ul className="list-disc list-inside text-gray-500 mb-4">
                    <li>Sales process optimization</li>
                    <li>Negotiation techniques</li>
                    <li>Customer relationship management</li>
                    <li>Sales performance metrics and analysis</li>
                  </ul>
                  <Button variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Approach</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>1. Analyze</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We start by thoroughly analyzing your startup's current situation, market position, and growth potential.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Strategize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Based on our analysis, we develop a customized strategy tailored to your specific needs and goals.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Implement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We work closely with your team to implement the strategy, providing hands-on support every step of the way.</p>
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
                  Ready to Accelerate Your Growth?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Let's discuss how our services can help your startup reach its full potential.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Schedule a Consultation</Button>
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