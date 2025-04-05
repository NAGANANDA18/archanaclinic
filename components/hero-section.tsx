import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 pt-16">
      <div className="absolute inset-0 z-0 bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20220310/pngtree-elements-of-soul-geometry-art-ego-intellect-photo-image_12568612.jpg? height=1080&width=1920')] bg-cover bg-center opacity-20" />

      <div className="container relative z-10 mx-auto px-4 py-16 text-center md:py-24">
        <div className="animate-fadeIn">
          <h1 className="mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">Archana Clinic</h1>
          <p className="mb-2 text-2xl font-medium text-primary/90 md:text-3xl">
            Neuro-Psychiatry & General Medical Care
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Specialized healthcare facility providing comprehensive neurological, psychiatric, and general medical
            services under the expert care of Dr. Muralidhara K.A.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="animate-pulse">
              <Link href="/contact">
                Book an Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-primary">Expert Care</h3>
            <p className="text-muted-foreground">
              Experienced specialists providing personalized treatment plans for optimal health outcomes.
            </p>
          </div>

          <div className="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-primary">Comprehensive Services</h3>
            <p className="text-muted-foreground">
              From neurological disorders to general health concerns, we offer a wide range of medical services.
            </p>
          </div>

          <div className="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="mb-2 text-xl font-semibold text-primary">Patient-Centered Approach</h3>
            <p className="text-muted-foreground">
              We prioritize your comfort, well-being, and active participation in your healthcare journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

