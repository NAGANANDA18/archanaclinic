import Link from "next/link"
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutPreview from "@/components/about-preview"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      {/* Quick Info */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Opening Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: 10:00 AM - 2:00 PM</p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Phone: +91 9741126784</p>
              <p>Email: info@archanaclinic.com</p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p>#64/38, "Lahari", 1st Main KGS Layout, Vijayanagar</p>
              <p>Bangalore, Karnataka 560040</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Preview */}
      <AboutPreview />

      {/* Services */}
      <ServicesSection />

      {/* Appointment CTA */}
      <section className="w-full bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Schedule an Appointment?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            We're here to provide you with the best medical care. Book your consultation with Dr. Muralidhara K.A today.
          </p>
          <Button asChild size="lg" variant="secondary" className="animate-pulse">
            <Link href="/contact">
              Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}

