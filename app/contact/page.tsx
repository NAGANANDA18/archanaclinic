"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-appointment-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send appointment email")
      }

      setShowConfirmation(true)
      toast({
        title: "Appointment Booked!",
        description: `Your appointment has been scheduled for ${formData.date} during the ${getTimeSlotText(formData.time)} slot.`,
      })
    } catch (error) {
      console.error("Error booking appointment:", error)
      toast({
        title: "Error",
        description:
          "There was a problem booking your appointment. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTimeSlotText = (slot: string) => {
    switch (slot) {
      case "morning":
        return "Morning (9:00 AM - 12:00 PM)"
      case "afternoon":
        return "Afternoon (12:00 PM - 3:00 PM)"
      case "evening":
        return "Evening (7:00 PM - 9:00 PM)"
      default:
        return ""
    }
  }

  const closeConfirmation = () => {
    setShowConfirmation(false)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    })
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We're here to help. Reach out to us for appointments or any inquiries.
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        {/* Contact Info Section */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-primary">Get in Touch</h2>
          <div className="mb-8 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p className="text-muted-foreground">#64/38, "Lahari", 1st Main KGS Layout, Vijayanagar</p>
                <p className="text-muted-foreground">Bangalore, Karnataka 560040</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">+91 9741126784</p>
                <p className="text-muted-foreground">+91 9741158134</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">info@archanaclinic.com</p>
                <p className="text-muted-foreground">appointment.archanaclinic@gmail.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Working Hours</h3>
                <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-muted-foreground">Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-lg border p-4">
            <h3 className="mb-4 text-lg font-semibold">Location Map</h3>
            <div className="h-[300px] overflow-hidden rounded-lg bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.0020198709886!2d77.53156590334208!3d12.971334628251789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddb964b58b7%3A0xb676b4db65132bf5!2sArchana%20Clinic!5e0!3m2!1sen!2sin!4v1743836428823!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <Card>
          <CardHeader>
            <CardTitle>Book an Appointment</CardTitle>
            <CardDescription>
              Fill out the form below to schedule an appointment with Dr. Muralidhara K.A.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Required</Label>
                <Select value={formData.service} onValueChange={(val) => handleSelectChange("service", val)}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neurological">Neurological Consultation</SelectItem>
                    <SelectItem value="psychiatric">Psychiatric Consultation</SelectItem>
                    <SelectItem value="general">General Medical Check-up</SelectItem>
                    <SelectItem value="counseling">Counseling Session</SelectItem>
                    <SelectItem value="follow-up">Follow-up Visit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" value={formData.date} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select value={formData.time} onValueChange={(val) => handleSelectChange("time", val)}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
                    <SelectItem value="evening">Evening (7:00 PM - 9:00 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Additional details about your visit..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Booking..." : "Book Appointment"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Appointment Confirmed</DialogTitle>
            <DialogDescription>
              Thank you! Your appointment has been scheduled. We’ll contact you if anything changes.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={closeConfirmation}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
