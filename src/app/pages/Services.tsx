import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Monitor, Settings, Wrench, ShoppingCart, CheckCircle } from "lucide-react";

/** Pexels — professional engineering / tech installation context */
const SERVICES_HERO_IMAGE =
  "https://images.pexels.com/photos/19895719/pexels-photo-19895719.jpeg?auto=compress&cs=tinysrgb&w=1920";

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: "LED Screen Sales",
      description: "We offer a comprehensive range of LED screens tailored to meet diverse needs across industries.",
      image: "https://images.unsplash.com/photo-1771940954206-35d951135dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBzY3JlZW4lMjBkaXNwbGF5JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzQ2MDA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Indoor LED displays for corporate environments",
        "Outdoor LED billboards for advertising",
        "Stage and event LED screens",
        "Retail digital signage solutions",
        "Custom-sized displays for unique applications",
        "Energy-efficient and eco-friendly options",
      ],
    },
    {
      icon: Settings,
      title: "Installation Services",
      description: "Professional installation services ensuring your LED screens are set up for optimal performance and longevity.",
      image: "https://images.unsplash.com/photo-1719050817004-c76eb7c75c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFucyUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzQ2MDA5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Site assessment and planning",
        "Professional mounting and rigging",
        "Electrical wiring and connectivity",
        "Calibration and color correction",
        "Content management system setup",
        "Training for your staff",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description: "Keep your LED displays running at peak performance with our comprehensive maintenance and repair services.",
      image: "https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBkaWdpdGFsJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ2MDA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "24/7 emergency repair services",
        "Preventive maintenance programs",
        "Component replacement and upgrades",
        "Performance optimization",
        "Remote diagnostics and monitoring",
        "Extended warranty options",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Procurement Services",
      description: "Expert guidance in selecting and sourcing the perfect LED solutions to match your specific requirements and budget.",
      image: "https://images.unsplash.com/photo-1676491405940-9cd5d8cbf954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGNpdHl8ZW58MXx8fHwxNzc0NjAwOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Needs assessment and consultation",
        "Product recommendations and comparisons",
        "Vendor relationship management",
        "Quality assurance and testing",
        "Cost optimization strategies",
        "End-to-end project coordination",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden text-white">
        <img
          src={SERVICES_HERO_IMAGE}
          alt="Black male engineer working with professional display and control systems during LED installation"
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.38]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-900/92 via-blue-900/88 to-cyan-700/90"
          aria-hidden
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl md:text-6xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-200">
            Comprehensive LED display solutions from sales to maintenance
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <Icon className="w-16 h-16 mb-4 text-blue-600" />
                    <h2 className="text-4xl mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-700 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <Button asChild size="lg">
                        <Link to="/contact">Request Quote</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Service Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional LED solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs, goals, and budget to understand your requirements.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Our team designs a customized solution and provides detailed project plans.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Professional installation or delivery with thorough testing and setup.",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance, training, and 24/7 technical support.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Contact us today to discuss your LED display needs and receive a customized quote
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
