import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const OFFICE_ADDRESS =
  "Block 134, Flat 2 LSDPC Medium Estate, Ogba Lagos";
const OFFICE_ADDRESS_FULL = `${OFFICE_ADDRESS}, Nigeria`;
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS_FULL,
)}&hl=en&z=16&output=embed`;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success("Quote request submitted! We'll contact you within 24 hours.");

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Contact Us</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Get in touch with our team for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl mb-6">Let's Talk About Your Project</h2>
              <p className="text-lg text-slate-700 mb-8">
                Whether you need a single display or a complex multi-screen installation, our team is ready to help. Fill out the form or contact us directly using the information below.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-slate-600">+234 814 872 6286</p>
                        <p className="text-slate-600">+1 (234) 567-891 (Support)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-slate-600">info@lightingart-ng.com</p>
                        <p className="text-slate-600">sales@ledscreen.com</p>
                        <p className="text-slate-600">support@ledscreen.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office Location</h3>
                        <p className="text-slate-600">{OFFICE_ADDRESS}</p>
                        <p className="text-slate-600">Lagos State, Nigeria</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-slate-600">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="text-slate-600">Sunday: Closed</p>
                        <p className="text-sm text-blue-600 mt-2">24/7 Emergency Support Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Request Quote Form */}
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl mb-6">Request a Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 814 872 6286"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Required *</Label>
                      <Select value={formData.service} onValueChange={handleServiceChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">LED Screen Sales</SelectItem>
                          <SelectItem value="installation">Installation Services</SelectItem>
                          <SelectItem value="maintenance">Maintenance & Repairs</SelectItem>
                          <SelectItem value="procurement">Procurement Services</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Request
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-4">Visit Our Office</h2>
            <p className="text-lg text-slate-600">Stop by for a consultation or to see our display showroom</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-white">
            <iframe
              title={`Map: ${OFFICE_ADDRESS}`}
              src={MAP_EMBED_SRC}
              className="block w-full h-[min(70vh,500px)] min-h-[400px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="px-4 py-3 bg-white border-t border-slate-100 text-center text-slate-600 text-sm">
              <MapPin className="w-4 h-4 inline-block align-text-bottom mr-1.5 text-blue-600" />
              {OFFICE_ADDRESS_FULL}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">How quickly can you respond to a quote request?</h3>
                  <p className="text-slate-600">We aim to respond to all quote requests within 24 hours during business days. For urgent requests, please call our sales line directly.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Do you provide installation services nationwide?</h3>
                  <p className="text-slate-600">Yes, we provide installation services across the United States and can accommodate international projects on a case-by-case basis.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">What kind of warranty do you offer?</h3>
                  <p className="text-slate-600">All our LED screens come with manufacturer warranties, and we offer extended warranty options. Installation work is covered by our service guarantee.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Can I see a demo of your LED screens?</h3>
                  <p className="text-slate-600">Absolutely! Visit our showroom or we can arrange a virtual demo to showcase our LED screen capabilities and help you make an informed decision.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
