"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section - Centered without image */}
      <section className="py-12 md:py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Welcome to Archana Clinic</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Specialized care in Psychiatry and General Medical Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted/50 rounded-xl my-12">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Archana Clinic</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive care with a focus on patient comfort and well-being
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Expert Care",
              description: "Led by Dr. Muralidhara K.A with extensive experience in Psychiatry",
              icon: "Brain",
            },
            {
              title: "Comprehensive Services",
              description: "From psychiatric consultations to general medical care under one roof",
              icon: "Stethoscope",
            },
            {
              title: "Patient-Centered Approach",
              description: "Personalized treatment plans tailored to individual needs",
              icon: "Heart",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon === "Brain" && (
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
                        <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
                        <path d="M11.1 12c.9-.7 1.9-1 3.4-1h.5" />
                        <path d="M8 12a8.5 8.5 0 0 0-1.8-1.7C4.3 8.9 3 9 2 10" />
                        <path d="M2 17.5c1-.6 2.2-1.4 3.4-1.4.9 0 1.6.4 2.6 1.5" />
                        <path d="M15 17c.9.6 1.8 1 3 1 1.5 0 3-1 3-1" />
                        <path d="M20 8.5c-.6-.5-1.2-1-2.2-1-1.2 0-1.8 1-2.8 2" />
                        <path d="M13 12.5c0 .9.6 1.5 1.5 1.5s1.5-.6 1.5-1.5-.6-1.5-1.5-1.5" />
                        <path d="M19 11.5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1Z" />
                        <path d="M13.1 7.5c-.1.7.4 1.4 1.1 1.5.7.1 1.4-.4 1.5-1.1.1-.7-.4-1.4-1.1-1.5" />
                        <path d="M16.7 5c-.5.4-.6 1.1-.3 1.6.4.5 1.1.6 1.6.3.5-.4.6-1.1.3-1.6" />
                        <path d="M8.1 18.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5" />
                        <path d="M8.5 15c-.7-.1-1.4.4-1.5 1.1-.1.7.4 1.4 1.1 1.5.7.1 1.4-.4 1.5-1.1" />
                        <path d="M5.2 15c-.5-.4-1.2-.3-1.6.2-.4.5-.3 1.2.2 1.6.5.4 1.2.3 1.6-.2" />
                        <path d="M18 15.5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1Z" />
                      </svg>
                    )}
                    {feature.icon === "Stethoscope" && (
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
                        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                        <circle cx="20" cy="10" r="2" />
                      </svg>
                    )}
                    {feature.icon === "Heart" && (
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
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services for mental and physical wellbeing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Psychiatric Care</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
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
                    <span>Depression and Anxiety Disorders</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Bipolar Disorder Management</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Schizophrenia Treatment</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Personality Disorders</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/services#neuro-psychiatry">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Addiction Treatment</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
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
                    <span>Alcohol & Substance Use Disorders</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Comprehensive Deaddiction Programs</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Gambling Disorder Treatment</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Adult-Specific Problem Management</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/services#addiction-treatment">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4 text-center">General Medical Care</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
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
                    <span>Routine Health Check-ups</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Chronic Disease Management</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>Preventive Healthcare</span>
                  </li>
                  <li className="flex items-start">
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
                    <span>General Consultations</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/services#general-care">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile Preview - Centered without image */}
      <section className="py-12 bg-muted/50 rounded-xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Doctor</h2>
          <h3 className="text-xl font-semibold mb-2">Dr. Muralidhara K.A</h3>
          <p className="text-muted-foreground mb-6">
            Dr. Muralidhara is a highly qualified Psychiatrist with extensive experience in treating various mental
            health conditions and psychiatric disorders.
          </p>
          <Button asChild>
            <Link href="/about">Read Full Profile</Link>
          </Button>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Schedule an Appointment?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're here to provide the care you need. Book an appointment today or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

