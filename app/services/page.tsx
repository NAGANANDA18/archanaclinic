"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ServicesPage() {
  // Carousel state for each service type
  const [neuroPsychiatrySlide, setNeuroPsychiatrySlide] = useState(0)
  const [addictionSlide, setAddictionSlide] = useState(0)
  const [generalCareSlide, setGeneralCareSlide] = useState(0)

  // Carousel data for Neuro-Psychiatry
  const neuroPsychiatrySlides = [
    {
      title: "Mood Disorders",
      items: [
        "Depression Treatment",
        "Anxiety Disorder Management",
        "Bipolar Disorder Care",
        "Panic Disorder Treatment",
      ],
    },
    {
      title: "Psychotic Disorders",
      items: ["Schizophrenia Management", "Schizoaffective Disorder", "Delusional Disorders", "Psychosis Treatment"],
    },
    {
      title: "Behavioral Disorders",
      items: [
        "Attention Deficit Hyperactivity Disorder",
        "Conduct Disorders",
        "Oppositional Defiant Disorder",
        "Impulse Control Disorders",
      ],
    },
    {
      title: "Personality Disorders",
      items: [
        "Borderline Personality Disorder",
        "Narcissistic Personality Disorder",
        "Antisocial Personality Disorder",
        "Avoidant Personality Disorder",
      ],
    },
  ]

  // Carousel data for Addiction Treatment
  const addictionSlides = [
    {
      title: "Substance Use Disorders",
      items: [
        "Alcohol Addiction Treatment",
        "Drug Dependency Management",
        "Prescription Medication Abuse",
        "Comprehensive Deaddiction Programs",
      ],
    },
    {
      title: "Behavioral Addictions",
      items: [
        "Gambling Disorder Treatment",
        "Internet & Gaming Addiction",
        "Compulsive Behaviors",
        "Other Impulse Control Disorders",
      ],
    },
    {
      title: "Adult-Specific Problems",
      items: [
        "Work-Related Stress & Burnout",
        "Relationship Difficulties",
        "Life Transitions & Adjustments",
        "Midlife Crisis Management",
      ],
    },
    {
      title: "Treatment Approaches",
      items: [
        "Medically-Assisted Detoxification",
        "Cognitive Behavioral Therapy (CBT)",
        "Motivational Enhancement Therapy",
        "Family Therapy & Support",
      ],
    },
  ]

  // Carousel data for General Care
  const generalCareSlides = [
    {
      title: "Preventive Healthcare",
      items: ["Routine Health Check-ups", "Health Risk Assessments", "Vaccination Services", "Health Education"],
    },
    {
      title: "Chronic Disease Management",
      items: ["Hypertension Treatment", "Diabetes Care", "Thyroid Disorder Management", "Respiratory Condition Care"],
    },
    {
      title: "General Consultations",
      items: ["Acute Illness Treatment", "Minor Injury Care", "Diagnostic Services", "Referral Services"],
    },
    {
      title: "Geriatric Care",
      items: ["Elderly Health Management", "Medication Review", "Fall Prevention", "Cognitive Assessment"],
    },
  ]

  // Navigation functions for carousels
  const nextSlide = (current, setCurrent, maxSlides) => {
    setCurrent(current === maxSlides - 1 ? 0 : current + 1)
  }

  const prevSlide = (current, setCurrent, maxSlides) => {
    setCurrent(current === 0 ? maxSlides - 1 : current - 1)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive healthcare services for mental and physical wellbeing
        </p>
      </motion.div>

      <Tabs defaultValue="neuro-psychiatry" className="mb-16">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="neuro-psychiatry" id="neuro-psychiatry">
            Psychiatric Care
          </TabsTrigger>
          <TabsTrigger value="addiction-treatment" id="addiction-treatment">
            Addiction Treatment
          </TabsTrigger>
          <TabsTrigger value="general-care" id="general-care">
            General Medical Care
          </TabsTrigger>
        </TabsList>

        <TabsContent value="neuro-psychiatry" className="mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">Psychiatric Services</h2>
                <p className="text-muted-foreground mb-6">
                  Our psychiatric services provide comprehensive care for conditions affecting mental health. Dr.
                  Muralidhara specializes in diagnosing and treating a wide range of psychiatric disorders.
                </p>

                {/* Carousel for Psychiatric Services */}
                <div className="relative mb-8">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${neuroPsychiatrySlide * 100}%)` }}
                    >
                      {neuroPsychiatrySlides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4">
                          <div className="bg-muted/30 p-6 rounded-lg h-full">
                            <h3 className="text-xl font-semibold mb-4 text-primary">{slide.title}</h3>
                            <ul className="space-y-2">
                              {slide.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 text-primary mt-1"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        prevSlide(neuroPsychiatrySlide, setNeuroPsychiatrySlide, neuroPsychiatrySlides.length)
                      }
                      className="rounded-full"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>

                    <div className="flex space-x-2">
                      {neuroPsychiatrySlides.map((_, index) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full ${
                            neuroPsychiatrySlide === index ? "bg-primary" : "bg-muted-foreground/30"
                          }`}
                          onClick={() => setNeuroPsychiatrySlide(index)}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        nextSlide(neuroPsychiatrySlide, setNeuroPsychiatrySlide, neuroPsychiatrySlides.length)
                      }
                      className="rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Treatment Approaches</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Medication Management</AccordionTrigger>
                    <AccordionContent>
                      We provide expert medication management for psychiatric conditions, carefully selecting
                      appropriate medications, monitoring responses, and adjusting treatments as needed to minimize side
                      effects and maximize benefits.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Psychotherapy</AccordionTrigger>
                    <AccordionContent>
                      Our psychotherapy services include cognitive-behavioral therapy (CBT), interpersonal therapy, and
                      other evidence-based approaches to help patients develop coping strategies, improve relationships,
                      and address underlying psychological issues.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Psychiatric Assessments</AccordionTrigger>
                    <AccordionContent>
                      Comprehensive psychiatric evaluations to diagnose mental health conditions, including advanced
                      testing and interpretation of results to guide treatment planning.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Integrated Treatment Plans</AccordionTrigger>
                    <AccordionContent>
                      We develop personalized treatment plans that combine multiple approaches, addressing both
                      biological and psychological aspects of a patient's condition for more effective and comprehensive
                      care.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="addiction-treatment" className="mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">Addiction Treatment Services</h2>
                <p className="text-muted-foreground mb-6">
                  At Archana Clinic, we provide comprehensive treatment for various addiction-related issues. Our
                  approach combines medical intervention, psychological support, and behavioral therapy to help patients
                  overcome addiction and maintain long-term recovery.
                </p>

                {/* Carousel for Addiction Treatment */}
                <div className="relative mb-8">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${addictionSlide * 100}%)` }}
                    >
                      {addictionSlides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4">
                          <div className="bg-muted/30 p-6 rounded-lg h-full">
                            <h3 className="text-xl font-semibold mb-4 text-primary">{slide.title}</h3>
                            <ul className="space-y-2">
                              {slide.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 text-primary mt-1"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => prevSlide(addictionSlide, setAddictionSlide, addictionSlides.length)}
                      className="rounded-full"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>

                    <div className="flex space-x-2">
                      {addictionSlides.map((_, index) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full ${
                            addictionSlide === index ? "bg-primary" : "bg-muted-foreground/30"
                          }`}
                          onClick={() => setAddictionSlide(index)}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => nextSlide(addictionSlide, setAddictionSlide, addictionSlides.length)}
                      className="rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-3 text-primary mt-1"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Our Commitment to Recovery</h3>
                      <p className="text-muted-foreground">
                        We understand that addiction is a complex condition that affects both the individual and their
                        loved ones. Our treatment programs are designed to address not just the addiction itself, but
                        also the underlying factors that contribute to addictive behaviors. We provide a supportive,
                        non-judgmental environment where patients can work towards recovery with dignity and respect.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Recovery Process</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Assessment & Diagnosis</AccordionTrigger>
                    <AccordionContent>
                      Our treatment begins with a comprehensive assessment to understand the nature and severity of the
                      addiction, as well as any co-occurring mental health conditions. This helps us develop a
                      personalized treatment plan tailored to your specific needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Detoxification (if needed)</AccordionTrigger>
                    <AccordionContent>
                      For substance use disorders, we provide medically supervised detoxification to safely manage
                      withdrawal symptoms. Our medical team ensures your comfort and safety throughout this process.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Therapy & Counseling</AccordionTrigger>
                    <AccordionContent>
                      We offer various therapeutic approaches including individual counseling, group therapy, and family
                      therapy. These sessions help address the psychological aspects of addiction and develop coping
                      strategies.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Medication Management</AccordionTrigger>
                    <AccordionContent>
                      When appropriate, we may prescribe medications to help manage cravings, reduce withdrawal
                      symptoms, or treat co-occurring mental health conditions that may contribute to addictive
                      behaviors.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Aftercare & Relapse Prevention</AccordionTrigger>
                    <AccordionContent>
                      Recovery is an ongoing process. We provide comprehensive aftercare planning and relapse prevention
                      strategies to support long-term sobriety and well-being.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="general-care" className="mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">General Medical Services</h2>
                <p className="text-muted-foreground mb-6">
                  In addition to specialized psychiatric care, Archana Clinic offers comprehensive general medical
                  services to address a wide range of health concerns. Our approach focuses on preventive care and
                  managing chronic conditions.
                </p>

                {/* Carousel for General Care */}
                <div className="relative mb-8">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${generalCareSlide * 100}%)` }}
                    >
                      {generalCareSlides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4">
                          <div className="bg-muted/30 p-6 rounded-lg h-full">
                            <h3 className="text-xl font-semibold mb-4 text-primary">{slide.title}</h3>
                            <ul className="space-y-2">
                              {slide.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 text-primary mt-1"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => prevSlide(generalCareSlide, setGeneralCareSlide, generalCareSlides.length)}
                      className="rounded-full"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>

                    <div className="flex space-x-2">
                      {generalCareSlides.map((_, index) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full ${
                            generalCareSlide === index ? "bg-primary" : "bg-muted-foreground/30"
                          }`}
                          onClick={() => setGeneralCareSlide(index)}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => nextSlide(generalCareSlide, setGeneralCareSlide, generalCareSlides.length)}
                      className="rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Our Approach to General Healthcare</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Patient-Centered Care</AccordionTrigger>
                    <AccordionContent>
                      Our approach focuses on treating each patient as an individual with unique needs and concerns. We
                      take the time to listen, understand your health goals, and develop personalized care plans that
                      work for your lifestyle.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Preventive Focus</AccordionTrigger>
                    <AccordionContent>
                      We believe that preventing illness is as important as treating it. Our preventive care services
                      help identify risk factors early and implement strategies to maintain optimal health and prevent
                      disease progression.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Comprehensive Assessment</AccordionTrigger>
                    <AccordionContent>
                      Our thorough evaluations consider all aspects of your health, including physical, mental, and
                      social factors. This holistic approach ensures that we address the root causes of health issues,
                      not just the symptoms.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Continuity of Care</AccordionTrigger>
                    <AccordionContent>
                      We provide ongoing support and follow-up care to monitor your progress and adjust treatment plans
                      as needed. This continuous relationship helps us better understand your health patterns and
                      provide more effective care over time.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-muted/50 p-8 rounded-xl mb-16"
      >
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Our Treatment Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "Initial Consultation",
              description: "Comprehensive assessment of your condition and medical history",
              icon: "ClipboardList",
            },
            {
              step: "Diagnosis",
              description: "Accurate identification of the underlying condition",
              icon: "Search",
            },
            {
              step: "Treatment Plan",
              description: "Personalized approach tailored to your specific needs",
              icon: "FileText",
            },
            {
              step: "Follow-up Care",
              description: "Ongoing support and monitoring of your progress",
              icon: "RefreshCw",
            },
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {process.icon === "ClipboardList" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M12 11h4" />
                    <path d="M12 16h4" />
                    <path d="M8 11h.01" />
                    <path d="M8 16h.01" />
                  </svg>
                )}
                {process.icon === "Search" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                )}
                {process.icon === "FileText" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                )}
                {process.icon === "RefreshCw" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{process.step}</h3>
              <p className="text-muted-foreground text-sm">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Schedule an appointment today to discuss your health concerns and begin your journey to better health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/contact">Book Appointment</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

