import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

type FilterType = "all" | "outdoor" | "events" | "corporate" | "retail";

export function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");

  const projects = [
    {
      title: "Times Square LED Billboard",
      category: "outdoor",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1676491405940-9cd5d8cbf954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGNpdHl8ZW58MXx8fHwxNzc0NjAwOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Massive outdoor LED display installation for high-impact advertising in one of the world's busiest locations.",
      specs: ["80ft x 40ft", "P10 Outdoor", "High Brightness"],
    },
    {
      title: "Music Festival Main Stage",
      category: "events",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsZWQlMjBkaXNwbGF5fGVufDF8fHx8MTc3NDYwMTAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Multi-screen LED setup for major music festival with synchronized content and stunning visual effects.",
      specs: ["Multiple Panels", "P3.9 LED", "High Refresh Rate"],
    },
    {
      title: "Corporate Headquarters Lobby",
      category: "corporate",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBkaWdpdGFsJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ2MDA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Elegant curved LED display wall showcasing company branding and interactive content.",
      specs: ["30ft x 12ft", "P2.5 Indoor", "Curved Design"],
    },
    {
      title: "Shopping Mall Digital Signage",
      category: "retail",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGRpZ2l0YWwlMjBzaWduYWdlfGVufDF8fHx8MTc3NDYwMDk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Network of LED displays throughout shopping center for dynamic advertising and wayfinding.",
      specs: ["Multiple Sizes", "P3 Indoor", "Content Management"],
    },
    {
      title: "Sports Stadium Scoreboard",
      category: "events",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1651052585577-96f3b0484c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwc2NyZWVufGVufDF8fHx8MTc3NDUxMDM2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "State-of-the-art LED scoreboard with replay capabilities and fan engagement features.",
      specs: ["120ft x 60ft", "P6 Outdoor", "Weather Resistant"],
    },
    {
      title: "Highway Advertising Board",
      category: "outdoor",
      location: "Dallas, TX",
      image: "https://images.unsplash.com/photo-1771940954206-35d951135dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBzY3JlZW4lMjBkaXNwbGF5JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzQ2MDA5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "High-visibility digital billboard along major highway with dynamic content rotation.",
      specs: ["48ft x 24ft", "P10 Outdoor", "Remote Management"],
    },
    {
      title: "Conference Center Video Wall",
      category: "corporate",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc3NDUxMDM1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Seamless LED video wall for presentations and virtual meetings in modern conference facility.",
      specs: ["20ft x 10ft", "P1.9 Indoor", "4K Resolution"],
    },
    {
      title: "Concert Tour Mobile LED",
      category: "events",
      location: "Touring",
      image: "https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsZWQlMjBkaXNwbGF5fGVufDF8fHx8MTc3NDYwMTAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Portable LED screen system for national concert tour with quick setup and teardown capabilities.",
      specs: ["Modular Design", "P3.9 LED", "Tour Ready"],
    },
    {
      title: "Retail Flagship Store Windows",
      category: "retail",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1764795850248-97a5e986b242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGRpZ2l0YWwlMjBzaWduYWdlfGVufDF8fHx8MTc3NDYwMDk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Transparent LED displays integrated into storefront windows for eye-catching product showcases.",
      specs: ["Custom Sizes", "Transparent LED", "High Brightness"],
    },
  ];

  const filters = [
    { value: "all" as FilterType, label: "All Projects" },
    { value: "outdoor" as FilterType, label: "Outdoor Advertising" },
    { value: "events" as FilterType, label: "Events & Entertainment" },
    { value: "corporate" as FilterType, label: "Corporate" },
    { value: "retail" as FilterType, label: "Retail" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Our Projects</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Showcasing our successful LED screen installations across various industries
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-[73px] z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((item) => (
              <Button
                key={item.value}
                variant={filter === item.value ? "default" : "outline"}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="capitalize bg-blue-600">
                      {project.category.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.specs.map((spec, specIndex) => (
                      <Badge key={specIndex} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600">Cities Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
