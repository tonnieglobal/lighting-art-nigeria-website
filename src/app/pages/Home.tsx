import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Monitor,
  Wrench,
  ShoppingCart,
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

/** Royalty-free LED / digital display footage (Pexels) — varied city scenes */
const HERO_VIDEO_POSTER =
  "https://images.unsplash.com/photo-1771940954206-35d951135dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBzY3JlZW4lMjBkaXNwbGF5JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzQ2MDA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1920";

const HERO_VIDEOS = [
  "https://videos.pexels.com/video-files/5086609/5086609-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/3275340/3275340-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/3297559/3297559-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/3087312/3087312-uhd_2560_1440_30fps.mp4",
] as const;

export function Home() {
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    heroVideoRef.current?.play().catch(() => {});
  }, [heroVideoIndex, prefersReducedMotion]);

  const handleHeroVideoEnded = () => {
    setHeroVideoIndex((i) => (i + 1) % HERO_VIDEOS.length);
  };
  const services = [
    {
      icon: Monitor,
      title: "LED Screen Sales",
      description: "High-quality LED screens for any application, from small displays to massive installations.",
    },
    {
      icon: Settings,
      title: "Installation Services",
      description: "Professional installation by certified technicians ensuring optimal performance.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description: "Regular maintenance and quick repairs to keep your screens running smoothly.",
    },
    {
      icon: ShoppingCart,
      title: "Procurement Services",
      description: "Expert guidance in selecting and sourcing the right LED solutions for your needs.",
    },
  ];

  const projects = [
    {
      title: "City Center Billboard",
      category: "Outdoor Advertising",
      image: "https://images.unsplash.com/photo-1676491405940-9cd5d8cbf954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGNpdHl8ZW58MXx8fHwxNzc0NjAwOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Concert Stage Display",
      category: "Events & Entertainment",
      image: "https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsZWQlMjBkaXNwbGF5fGVufDF8fHx8MTc3NDYwMTAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Corporate Headquarters",
      category: "Corporate Display",
      image: "https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBkaWdpdGFsJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ2MDA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: CheckCircle, value: "1,200+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Events",
      role: "Event Manager",
      content: "Lighting Art Nigeria transformed our conference with stunning displays. Professional service from start to finish!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Urban Advertising",
      role: "Marketing Director",
      content: "Outstanding quality and reliability. Our outdoor LED screens have been running flawlessly for over 2 years.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "RetailMax",
      role: "Store Operations",
      content: "The installation team was efficient and the ongoing maintenance support is exceptional.",
      rating: 5,
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
    },
    {
      title: "Quality Products",
      description: "Premium LED screens from trusted manufacturers",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
    },
    {
      title: "Competitive Pricing",
      description: "Best value solutions tailored to your budget",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[min(100vh,700px)] min-h-[520px] flex items-center justify-center text-white overflow-hidden">
        {!prefersReducedMotion ? (
          <video
            ref={heroVideoRef}
            key={HERO_VIDEOS[heroVideoIndex]}
            className="absolute inset-0 size-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            poster={HERO_VIDEO_POSTER}
            onEnded={handleHeroVideoEnded}
            aria-hidden
          >
            <source src={HERO_VIDEOS[heroVideoIndex]} type="video/mp4" />
          </video>
        ) : null}
        <div
          className={`absolute inset-0 bg-cover bg-center ${prefersReducedMotion ? "" : "hidden"}`}
          style={{ backgroundImage: `url('${HERO_VIDEO_POSTER}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/88 via-blue-900/75 to-slate-900/85" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Illuminate Your Vision with Premium LED Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Industry-leading LED screen sales, installation, and maintenance services for businesses of all sizes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Welcome to Lighting Art Nigeria</h2>
            <p className="text-lg text-slate-700 mb-4">
              With over 15 years of experience, we are a trusted leader in LED screen technology, serving corporate organizations, event planners, advertising agencies, government institutions, and retail businesses worldwide.
            </p>
            <p className="text-lg text-slate-700">
              Our mission is to deliver cutting-edge LED display solutions that captivate audiences and exceed expectations.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="group cursor-default text-center border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] hover:border-blue-400/70 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/90 hover:shadow-xl hover:shadow-blue-500/20 motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-md"
                >
                  <CardContent className="pt-6">
                    <Icon className="mx-auto mb-4 h-12 w-12 text-blue-600 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-blue-700 motion-reduce:group-hover:scale-100" />
                    <div className="mb-2 text-4xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-800">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 transition-colors duration-300 group-hover:text-slate-900 group-hover:font-semibold">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive LED screen solutions tailored to your unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition">
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 mb-4 text-blue-600" />
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <Link to="/services" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of successful LED screen installations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm text-blue-300 mb-2">{project.category}</div>
                    <h3 className="text-xl">{project.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose Lighting Art Nigeria</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deliver excellence through innovation, quality, and dedicated service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <CheckCircle className="w-10 h-10 mb-4 text-green-600" />
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Ready to Transform Your Display Experience?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Get in touch with our team today for a free consultation and customized quote
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 border-2 border-white bg-white/15 text-white shadow-md backdrop-blur-sm hover:bg-white hover:text-blue-600"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
