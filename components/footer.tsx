import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Archana Clinic</h2>
            <p className="mb-4 text-primary-foreground/90">
              Specialized healthcare facility offering Neuro-Psychiatry and General Medical Care services.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/90 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/90 transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/90 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/90 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-primary-foreground/90 transition-colors hover:text-white">
                  Neurological Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/90 transition-colors hover:text-white">
                  Psychiatric Treatment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/90 transition-colors hover:text-white">
                  General Medical Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/90 transition-colors hover:text-white">
                  Counseling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>#64/38, "Lahari", 1st Main KGS Layout, Vijayanagar, Bangalore, Karnataka 560040</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+91 9741158134</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@archanaclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p className="text-primary-foreground/90">
            &copy; {new Date().getFullYear()} Archana Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
