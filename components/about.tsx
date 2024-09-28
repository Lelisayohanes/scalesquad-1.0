'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, Heart } from "lucide-react"

export function About() {
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
              About Us
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              We're passionate about helping startups grow from small beginnings into successful enterprises.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Our Story</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Founded in 2015, Startup Growth Consultancy was born from a simple idea: to provide startups with the
              expertise and support they need to thrive in today's competitive market. Our founders, having experienced
              the challenges of building startups firsthand, realized there was a gap in the market for comprehensive,
              tailored growth services.
            </p>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Since then, we've helped hundreds of startups across various industries to refine their strategies,
              optimize their operations, and achieve sustainable growth. Our team has grown to include experts in
              web development, digital marketing, business strategy, and sales, allowing us to offer a holistic
              approach to startup growth.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Meet Our Team</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Jane Doe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Co-founder & CEO</p>
                  <p className="mt-2 text-sm text-gray-500">
                    With 15 years of experience in scaling startups, Jane leads our strategic vision and operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>John Smith</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Co-founder & CTO</p>
                  <p className="mt-2 text-sm text-gray-500">
                    John brings 20 years of tech expertise, overseeing our web development and digital solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Emily Brown</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Head of Marketing</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Emily's innovative marketing strategies have helped numerous startups achieve rapid growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Core Values</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle>Client-Centric Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We put our clients' needs at the heart of everything we do, ensuring tailored solutions for each unique startup.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 mb-2" />
                  <CardTitle>Passion for Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We're constantly exploring new ideas and technologies to keep our clients at the cutting edge of their industries.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2" />
                  <CardTitle>Commitment to Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We're dedicated to driving sustainable growth, both for our clients and for our own team.</p>
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
                  Let's work together to turn your startup dreams into reality.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Get in Touch</Button>
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