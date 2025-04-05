import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Contact Information</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're here to help. Reach out to us for appointments or any inquiries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg bg-primary/5 p-6 text-center transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary">Our Location</h3>
            <p className="mb-4 text-muted-foreground">
              #64/38, "Lahari", 1st Main KGS Layout, Vijayanagar
              <br />
              Bangalore, Karnataka 560040
            </p>
            <Button asChild variant="link" className="mt-auto">
              <Link href="https://www.google.com/maps/place/Archana+Clinic/@12.9718453,77.5314748,19.25z/data=!4m6!3m5!1s0x3bae3ddb964b58b7:0xb676b4db65132bf5!8m2!3d12.9718206!4d77.5318335!16s%2Fg%2F11fx_53l9_?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                View on Map <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-primary/5 p-6 text-center transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary">Phone</h3>
            <p className="mb-4 text-muted-foreground">
              +91 9741126784
              <br />
              +91 9741158134
            </p>
            <Button asChild variant="link" className="mt-auto">
              <Link href="tel:+919741126784">
                Call Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-primary/5 p-6 text-center transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary">Email</h3>
            <p className="mb-4 text-muted-foreground">
              info@archanaclinic.com
              <br />
              appointment.archanaclinic@gmail.com
            </p>
            <Button asChild variant="link" className="mt-auto">
              <Link href="mailto:info@archanaclinic.com">
                Email Us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us for More Information <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

