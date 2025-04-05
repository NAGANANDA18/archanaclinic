import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We offer a comprehensive range of medical services to address your health needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-primary/5 pb-2">
              <div className="mb-2 text-primary">
                <Brain className="h-10 w-10" />
              </div>
              <CardTitle className="text-2xl">Neuro-Psychiatric Care</CardTitle>
              <CardDescription className="text-base">
                Specialized treatment for neurological and psychiatric conditions
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Diagnosis and treatment of neurological disorders</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Comprehensive psychiatric evaluations</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Medication management for mental health conditions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Psychotherapy and counseling services</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Addiction treatment programs</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Button asChild variant="outline">
                <Link href="/services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-primary/5 pb-2">
              <div className="mb-2 text-primary">
                <Heart className="h-10 w-10" />
              </div>
              <CardTitle className="text-2xl">General Medical Care</CardTitle>
              <CardDescription className="text-base">
                Comprehensive healthcare services for patients of all ages
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Routine check-ups and preventive care</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Management of chronic conditions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Diagnostic services and health screenings</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Immunizations and vaccinations</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                  <span>Health education and lifestyle counseling</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Button asChild variant="outline">
                <Link href="/services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

