import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Stethoscope, Activity, PillIcon as Pills, Users } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Our Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Comprehensive Neuro-Psychiatric and General Medical Care services tailored to your needs
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">Neuro-Psychiatric Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Brain className="h-10 w-10" />}
            title="Neurological Disorder Treatment"
            description="Comprehensive diagnosis and treatment for epilepsy, stroke, headaches, movement disorders, and other neurological conditions."
          />

          <ServiceCard
            icon={<Activity className="h-10 w-10" />}
            title="Psychiatric Care"
            description="Expert treatment for depression, anxiety, bipolar disorder, schizophrenia, OCD, PTSD, and other mental health conditions."
          />

          <ServiceCard
            icon={<Pills className="h-10 w-10" />}
            title="Addiction Treatment"
            description="Specialized programs for alcohol, drug, and behavioral addictions with a focus on long-term recovery and well-being."
          />

          <ServiceCard
            icon={<Users className="h-10 w-10" />}
            title="Family Counseling"
            description="Therapeutic sessions for families dealing with relationship issues, communication problems, and conflict resolution."
          />

          <ServiceCard
            icon={<Brain className="h-10 w-10" />}
            title="Cognitive Behavioral Therapy"
            description="Evidence-based therapy to help patients identify and change negative thought patterns and behaviors."
          />

          <ServiceCard
            icon={<Activity className="h-10 w-10" />}
            title="Stress Management"
            description="Techniques and strategies to help patients cope with stress, anxiety, and improve overall mental well-being."
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">General Medical Care</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Stethoscope className="h-10 w-10" />}
            title="Routine Check-ups"
            description="Comprehensive physical examinations to assess your overall health status and identify potential health concerns."
          />

          <ServiceCard
            icon={<Heart className="h-10 w-10" />}
            title="Chronic Disease Management"
            description="Ongoing care for conditions like diabetes, hypertension, asthma, and other chronic illnesses."
          />

          <ServiceCard
            icon={<Activity className="h-10 w-10" />}
            title="Preventive Care"
            description="Vaccinations, screenings, and lifestyle counseling to prevent diseases and promote long-term health."
          />

          <ServiceCard
            icon={<Pills className="h-10 w-10" />}
            title="Medication Management"
            description="Careful monitoring and adjustment of medications to ensure optimal effectiveness and minimize side effects."
          />

          <ServiceCard
            icon={<Stethoscope className="h-10 w-10" />}
            title="Diagnostic Services"
            description="Basic diagnostic tests and referrals for specialized testing when necessary."
          />

          <ServiceCard
            icon={<Heart className="h-10 w-10" />}
            title="Health Education"
            description="Personalized guidance on nutrition, exercise, and lifestyle modifications to improve overall health."
          />
        </div>
      </div>

      <div className="rounded-lg bg-primary p-8 text-white">
        <h2 className="mb-4 text-2xl font-bold">Our Approach to Care</h2>
        <p className="mb-6 text-lg">
          At Archana Clinic, we believe in a holistic approach to healthcare. We understand that physical and mental
          health are interconnected, and we strive to provide comprehensive care that addresses all aspects of your
          well-being.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white/10 p-4">
            <h3 className="mb-2 text-xl font-semibold">Patient-Centered</h3>
            <p>We prioritize your needs, preferences, and values in all treatment decisions.</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <h3 className="mb-2 text-xl font-semibold">Evidence-Based</h3>
            <p>Our treatments are based on the latest scientific research and clinical guidelines.</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <h3 className="mb-2 text-xl font-semibold">Compassionate</h3>
            <p>We provide care with empathy, respect, and understanding of your unique situation.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-primary/5 pb-2">
        <div className="mb-2 text-primary">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

