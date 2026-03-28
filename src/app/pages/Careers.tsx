import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Briefcase, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    coverLetter: "",
  });

  const jobs = [
    {
      title: "LED Installation Technician",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Join our installation team to deliver high-quality LED screen installations across the country. Requires technical expertise and willingness to travel.",
      requirements: [
        "3+ years experience in electrical installation or LED technology",
        "Valid driver's license and ability to travel",
        "Certification in electrical work preferred",
        "Strong problem-solving skills",
        "Ability to work at heights",
      ],
    },
    {
      title: "Sales Account Manager",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      description: "Drive business growth by managing key client relationships and identifying new opportunities in the LED display market.",
      requirements: [
        "5+ years experience in B2B sales",
        "Proven track record of meeting sales targets",
        "Excellent communication and presentation skills",
        "Knowledge of LED technology is a plus",
        "Bachelor's degree in Business or related field",
      ],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Oversee LED screen installation projects from planning to completion, ensuring quality and customer satisfaction.",
      requirements: [
        "PMP certification or equivalent",
        "3+ years project management experience",
        "Experience in construction or AV installation",
        "Strong organizational and leadership skills",
        "Proficiency in project management software",
      ],
    },
    {
      title: "Technical Support Specialist",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time",
      description: "Provide technical support to clients, troubleshoot issues, and ensure optimal performance of LED display systems.",
      requirements: [
        "2+ years experience in technical support",
        "Knowledge of LED display technology",
        "Excellent customer service skills",
        "Ability to explain technical concepts clearly",
        "Availability for on-call support rotation",
      ],
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Develop and execute marketing campaigns to promote our LED display solutions and grow brand awareness.",
      requirements: [
        "3+ years experience in B2B marketing",
        "Experience with digital marketing and SEO",
        "Strong content creation skills",
        "Analytics and data-driven approach",
        "Bachelor's degree in Marketing or related field",
      ],
    },
    {
      title: "LED Systems Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      description: "Design and optimize LED display systems, providing technical expertise for custom installations.",
      requirements: [
        "Bachelor's degree in Electrical Engineering or related field",
        "Experience with LED display systems",
        "Strong technical documentation skills",
        "CAD software proficiency",
        "Problem-solving and analytical skills",
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.position) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success("Application submitted successfully! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      resume: "",
      coverLetter: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc3NDUxMDM1N3ww&ixlib=rb-4.1.0&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Join Our Team</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Build your career with a leader in LED display technology
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Why Work at Lighting Art Nigeria?</h2>
            <p className="text-lg text-slate-700 mb-12">
              We're not just a company—we're a team of passionate professionals dedicated to innovation, excellence, and growth. At Lighting Art Nigeria, you'll have the opportunity to work on cutting-edge projects, develop your skills, and make a real impact in the LED display industry.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-xl mb-2">Growth Opportunities</h3>
                  <p className="text-slate-600">Continuous learning and career advancement in a growing industry</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">💼</div>
                  <h3 className="text-xl mb-2">Competitive Benefits</h3>
                  <p className="text-slate-600">Comprehensive health coverage, retirement plans, and paid time off</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="text-xl mb-2">Collaborative Culture</h3>
                  <p className="text-slate-600">Work with talented professionals in a supportive team environment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Open Positions</h2>
            <p className="text-lg text-slate-600">Find your next opportunity with Lighting Art Nigeria</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {job.department}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      onClick={() => {
                        setFormData({ ...formData, position: job.title });
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl mb-4">Apply Now</h2>
              <p className="text-lg text-slate-600">
                Submit your application and join our growing team
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
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
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      placeholder="e.g., LED Installation Technician"
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Resume/CV Link</Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="url"
                      value={formData.resume}
                      onChange={handleChange}
                      placeholder="https://..."
                    />
                    <p className="text-sm text-slate-500 mt-1">
                      Please provide a link to your resume (Google Drive, Dropbox, etc.)
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us why you'd be a great fit for this position..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
