import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">About Dr. Muralidhara K.A</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Dedicated to providing exceptional Neuro-Psychiatric and General Medical Care
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl">
            <Image
<<<<<<< HEAD
              src="photo.jpeg? height=800&width=600"
=======
              src="https://i.pinimg.com/236x/9f/8a/04/9f8a04de9dc05da8123f530d29818472.jpg? height=800&width=600"
>>>>>>> ed5b46e2d0506aedd79ed4919dbb472e9016bcdb
              alt="Dr. Muralidhara K.A"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">Professional Profile</h2>
          <p className="mb-4 text-lg">
<<<<<<< HEAD
            Dr. Muralidhara K.A is a highly qualified Neuro-Psychiatrist with over 9 years of experience in treating
            various psychiatric conditions.
=======
            Dr. Muralidhara K.A is a highly qualified Neuro-Psychiatrist with over 15 years of experience in treating
            various neurological and psychiatric conditions.
>>>>>>> ed5b46e2d0506aedd79ed4919dbb472e9016bcdb
          </p>
          <p className="mb-6 text-lg">
            After completing his medical education from a prestigious institution, he specialized in Neuro-Psychiatry
            and has since been dedicated to providing comprehensive care to his patients.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>MBBS, MD (Psychiatry)</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
<<<<<<< HEAD
              <span>9 Years Experience</span>
=======
              <span>15+ Years Experience</span>
>>>>>>> ed5b46e2d0506aedd79ed4919dbb472e9016bcdb
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Multiple Awards</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span>Patient-Centered Care</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">Expertise & Specializations</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
<<<<<<< HEAD
              title: "Psychosis",
              description:
                "Diagnosis and treatment of psychotic disorders including hallucinations, delusions, and disorganized thinking.",
            },
            {
              title: "Depression",
              description:
                "Comprehensive treatment for depressive disorders, including major depression, persistent depressive disorder, and seasonal affective disorder.",
            },
            {
              title: "Mania",
              description:
                "Management of manic episodes, bipolar disorder, and related mood disorders with medication and therapy.",
            },
            {
              title: "Anxiety Disorders",
              description:
                "Treatment for generalized anxiety, panic disorder, phobias, and social anxiety through medication and therapeutic approaches.",
            },
            {
              title: "OCD & Somatoform Disorders",
              description:
                "Specialized care for obsessive-compulsive disorder and conditions where psychological distress manifests as physical symptoms.",
            },
            {
              title: "Personality Disorders",
              description:
                "Therapeutic interventions for various personality disorders affecting behavior, thinking patterns, and interpersonal relationships.",
            },
            {
              title: "Aggression Management",
              description:
                "Techniques and treatments to help patients manage aggressive impulses and develop healthier coping mechanisms.",
            },
            {
              title: "Postpartum Psychosis",
              description:
                "Specialized care for new mothers experiencing severe mental health complications after childbirth.",
            },
            {
              title: "Marital Discord & Interpersonal Conflicts",
              description:
                "Counseling and therapy for couples and individuals experiencing relationship difficulties and communication problems.",
=======
              title: "Neurological Disorders",
              description:
                "Diagnosis and treatment of various neurological conditions including epilepsy, stroke, and movement disorders.",
            },
            {
              title: "Psychiatric Care",
              description:
                "Comprehensive treatment for depression, anxiety, bipolar disorder, schizophrenia, and other mental health conditions.",
            },
            {
              title: "Addiction Medicine",
              description:
                "Specialized care for substance abuse disorders and behavioral addictions with a focus on recovery.",
            },
            {
              title: "Geriatric Psychiatry",
              description:
                "Specialized mental health care for older adults, addressing age-related neurological and psychiatric concerns.",
>>>>>>> ed5b46e2d0506aedd79ed4919dbb472e9016bcdb
            },
            {
              title: "Child & Adolescent Psychiatry",
              description:
<<<<<<< HEAD
                "Specialized care for young patients with ADHD, conduct problems, learning difficulties, and developmental disorders.",
            },
            {
              title: "Counseling & Psychotherapy",
              description:
                "Evidence-based therapeutic approaches to help patients develop coping strategies and improve mental well-being.",
            },
            {
              title: "Elderly Care",
              description:
                "Specialized treatment for older adults with dementia, age-related psychosis, depression, and other geriatric mental health concerns.",
=======
                "Dedicated care for young patients dealing with developmental, behavioral, and emotional issues.",
            },
            {
              title: "General Medicine",
              description: "Comprehensive primary healthcare services for patients of all ages.",
>>>>>>> ed5b46e2d0506aedd79ed4919dbb472e9016bcdb
            },
          ].map((item, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">Education & Training</h2>
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">MBBS</h3>
<<<<<<< HEAD
            <p className="mb-1 text-muted-foreground">Sree Siddhartha Medical College, Tumkur 2004</p>
=======
            <p className="mb-1 text-muted-foreground">Prestigious Medical College, 2005</p>
>>>>>>> ed5b46e2d0506aedd79ed4919dbb472e9016bcdb
            <p>Graduated with honors in general medicine and surgery.</p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">MD (Psychiatry)</h3>
<<<<<<< HEAD
            <p className="mb-1 text-muted-foreground">Karnataka Institute of Medical Sciences (KIMS), Hubli 2016</p>
            <p>Specialized in psychiatric disorders with focus on neurological aspects.</p>
          </div>

        
=======
            <p className="mb-1 text-muted-foreground">National Institute of Mental Health, 2009</p>
            <p>Specialized in psychiatric disorders with focus on neurological aspects.</p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Fellowship in Neuropsychiatry</h3>
            <p className="mb-1 text-muted-foreground">International Neuropsychiatric Institute, 2011</p>
            <p>Advanced training in the intersection of neurology and psychiatry.</p>
          </div>
>>>>>>> ed5b46e2d0506aedd79ed4919dbb472e9016bcdb
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">Professional Approach</h2>
        <div className="rounded-lg bg-primary/5 p-8">
          <p className="mb-4 text-lg italic">
            "My approach to healthcare is centered around understanding each patient as a unique individual. I believe
            in combining the latest medical knowledge with compassionate care to provide the best possible outcomes."
          </p>
          <p className="text-right text-lg font-semibold">- Dr. Muralidhara K.A</p>
        </div>
      </div>
    </main>
  )
}
<<<<<<< HEAD
=======

>>>>>>> ed5b46e2d0506aedd79ed4919dbb472e9016bcdb
