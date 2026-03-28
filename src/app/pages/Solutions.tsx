import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Building2, Music, Store, Tv, CheckCircle } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: "Outdoor Advertising",
      description: "Captivate audiences with high-impact digital billboards and outdoor displays",
      image: "https://images.unsplash.com/photo-1676491405940-9cd5d8cbf954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGNpdHl8ZW58MXx8fHwxNzc0NjAwOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Maximum visibility in high-traffic locations",
        "Dynamic content rotation for multiple advertisers",
        "Weather-resistant and durable construction",
        "Remote content management and scheduling",
        "Energy-efficient LED technology",
        "ROI-focused advertising solutions",
      ],
      useCases: [
        "Highway billboards",
        "Transit advertising",
        "Building facades",
        "Street-level displays",
      ],
    },
    {
      icon: Music,
      title: "Events & Concerts",
      description: "Create unforgettable experiences with stunning visual displays for any event",
      image: "https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsZWQlMjBkaXNwbGF5fGVufDF8fHx8MTc3NDYwMTAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "High-resolution displays for close viewing",
        "Modular and portable design for easy setup",
        "Synchronized multi-screen capabilities",
        "High refresh rates for video content",
        "Customizable shapes and configurations",
        "Reliable performance for live events",
      ],
      useCases: [
        "Concert stages",
        "Corporate events",
        "Trade shows",
        "Festivals and fairs",
      ],
    },
    {
      icon: Tv,
      title: "Corporate Displays",
      description: "Enhance your corporate environment with professional LED display solutions",
      image: "https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBkaWdpdGFsJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ2MDA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Professional aesthetics for office environments",
        "Interactive touch-screen capabilities",
        "Seamless video wall configurations",
        "Integration with presentation systems",
        "Energy-efficient operation",
        "Easy content management and updates",
      ],
      useCases: [
        "Reception areas",
        "Conference rooms",
        "Control centers",
        "Corporate lobbies",
      ],
    },
    {
      icon: Store,
      title: "Retail Signage",
      description: "Drive sales and engagement with dynamic digital signage for retail spaces",
      image: "https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGRpZ2l0YWwlMjBzaWduYWdlfGVufDF8fHx8MTc3NDYwMDk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Attract attention and increase foot traffic",
        "Promote products and special offers",
        "Real-time pricing and inventory updates",
        "Enhanced customer experience",
        "Flexible content scheduling",
        "Multi-location content management",
      ],
      useCases: [
        "Store windows",
        "Point-of-sale displays",
        "Shopping mall directories",
        "Product showcases",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Industry Solutions</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Tailored LED display solutions for your specific industry needs
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Solutions for Every Industry</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We understand that different industries have unique requirements. Our LED display solutions are customized to meet the specific needs of your business.
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-4xl mb-4">{solution.title}</h2>
                    <p className="text-lg text-slate-700 mb-6">{solution.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <Card key={useCaseIndex} className="bg-slate-50">
                            <CardContent className="py-3 px-4">
                              <p className="text-slate-700">{useCase}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <Button asChild size="lg">
                      <Link to="/contact">Request Quote</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why LED Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-6 text-center">Why Choose LED Display Solutions?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-3">Energy Efficient</h3>
                  <p className="text-slate-600">LED technology consumes significantly less power than traditional displays, reducing operating costs and environmental impact.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-3">Long Lifespan</h3>
                  <p className="text-slate-600">LED screens last 100,000+ hours, providing years of reliable service with minimal maintenance requirements.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-3">Dynamic Content</h3>
                  <p className="text-slate-600">Update content instantly, schedule campaigns, and display multiple messages throughout the day to maximize impact.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-3">High Visibility</h3>
                  <p className="text-slate-600">Superior brightness and contrast ensure your message is seen clearly, even in direct sunlight or challenging environments.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Find the Perfect Solution for Your Business</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Our team of experts is ready to help you design and implement the ideal LED display solution
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link to="/contact">Get a Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 border-2 border-white bg-white/15 text-white shadow-md backdrop-blur-sm hover:bg-white hover:text-blue-600"
            >
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
