import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPreview() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:items-center">
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl md:h-[600px]">
          <Image
            src="placeholder-user.jpg? height=200&width=200"
            alt="Dr. Muralidhara K.A"
            fill
            className="object-fit transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Meet Dr. Muralidhara K.A</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Dr. Muralidhara K.A is a highly qualified Neuro-Psychiatrist with over 15 years of experience in treating
            various neurological and psychiatric conditions. His patient-centered approach and commitment to excellence
            have made Archana Clinic a trusted healthcare provider in the community.
          </p>

          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/5 p-4">
              <h3 className="mb-2 text-lg font-semibold text-primary">Education</h3>
              <p className="text-muted-foreground">MBBS, MD (Psychiatry), Fellowship in Neuropsychiatry</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h3 className="mb-2 text-lg font-semibold text-primary">Experience</h3>
              <p className="text-muted-foreground">15+ years of clinical practice in Neuro-Psychiatry</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h3 className="mb-2 text-lg font-semibold text-primary">Specialization</h3>
              <p className="text-muted-foreground">Neurological Disorders, Psychiatric Care</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h3 className="mb-2 text-lg font-semibold text-primary">Approach</h3>
              <p className="text-muted-foreground">Patient-centered, Evidence-based, Compassionate</p>
            </div>
          </div>

          <Button asChild>
            <Link href="/about">
              Learn More About Dr. Muralidhara <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

