import { Card, CardContent } from "../components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

export function About() {
  const coreValues = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority. We build lasting relationships through dedicated service.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace cutting-edge technology to provide the most advanced LED solutions.",
    },
    {
      icon: Eye,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices guide everything we do.",
    },
  ];

  const timeline = [
    { year: "2010", event: "Company founded with a vision to revolutionize LED display technology" },
    { year: "2013", event: "Expanded operations to serve nationwide clients" },
    { year: "2016", event: "Achieved ISO certification and industry recognition" },
    { year: "2019", event: "Completed 1,000th successful installation" },
    { year: "2023", event: "Launched 24/7 support services and expanded service offerings" },
    { year: "2026", event: "Serving 500+ clients with industry-leading solutions" },
  ];

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
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">About Lighting Art Nigeria</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Pioneering LED display solutions since 2010
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-lg mb-6">
                Founded in 2010, Lighting Art Nigeria has grown from a small startup to become one of the most trusted names in LED display technology. Our journey began with a simple mission: to make high-quality LED screens accessible to businesses of all sizes while providing exceptional service and support.
              </p>
              <p className="text-lg mb-6">
                Over the years, we've completed more than 1,200 projects across various industries, from massive outdoor advertising displays to intimate corporate installations. Our team of certified professionals brings decades of combined experience, ensuring that every project is executed with precision and care.
              </p>
              <p className="text-lg">
                Today, Lighting Art Nigeria stands as a leader in the LED display industry, known for our commitment to quality, innovation, and customer satisfaction. We continue to invest in the latest technology and training to provide our clients with cutting-edge solutions that drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-slate-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="pt-8">
                <Target className="w-16 h-16 mb-6 text-blue-600" />
                <h2 className="text-3xl mb-4">Our Mission</h2>
                <p className="text-lg text-slate-700">
                  To deliver innovative, reliable, and cost-effective LED display solutions that help our clients communicate their message effectively and achieve their business objectives. We are committed to providing exceptional service, quality products, and ongoing support that builds lasting partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="pt-8">
                <Eye className="w-16 h-16 mb-6 text-purple-600" />
                <h2 className="text-3xl mb-4">Our Vision</h2>
                <p className="text-lg text-slate-700">
                  To be the global leader in LED display technology, recognized for innovation, quality, and customer service excellence. We envision a world where every business has access to stunning visual displays that captivate audiences and drive engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl mb-6">Our Team</h2>
            <p className="text-lg text-slate-700 mb-8">
              Lighting Art Nigeria is powered by a diverse team of talented professionals, including certified engineers, project managers, sales specialists, and support technicians. Our team members bring expertise from various backgrounds in display technology, electrical engineering, and customer service.
            </p>
            <p className="text-lg text-slate-700">
              We invest heavily in ongoing training and certification to ensure our team stays at the forefront of LED display technology and industry best practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
