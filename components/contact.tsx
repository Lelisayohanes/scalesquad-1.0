'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
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
              Contact Us
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Get in touch with our team of experts to start your growth journey.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help you grow your startup. Fill out the form and we'll be in touch as soon as possible.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-sm text-gray-500">123 Growth Street, Startup City, 12345</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Contact Information</h3>
                  <p className="text-sm text-gray-500">Email: info@startupgrowth.com</p>
                  <p className="text-sm text-gray-500">Phone: (123) 456-7890</p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name">Name</label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <Input id="email" placeholder="Enter your email" required type="email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message">Message</label>
                      <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" required />
                    </div>
                    <Button type="submit">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How We Can Help</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Phone className="h-8 w-8 mb-2" />
                  <CardTitle>Sales Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Interested in our services? Our sales team is ready to help you find the perfect solution for your startup.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Mail className="h-8 w-8 mb-2" />
                  <CardTitle>Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Need technical support or have questions about our services? Our support team is here to assist you.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 mb-2" />
                  <CardTitle>Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Interested in partnering with us? Let's discuss how we can work together to drive mutual growth.</p>
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
                  Book a free consultation with our experts and take the first step towards success.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Book a Consultation</Button>
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