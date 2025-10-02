import { Badge } from "../ui/badge";
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div>
      {" "}
      {/* El fondo de la sección principal debe ser oscuro (bg-background) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/10 text-purple-400 border-purple-600/20">
              Testimonials
            </Badge>
            {/* El título principal debe ser claro (text-foreground) */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content:
                  "Union Software transformed our vision into a scalable SaaS platform. Their expertise and dedication are unmatched.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "CTO, DataFlow Systems",
                content:
                  "The team's technical proficiency and attention to detail exceeded our expectations. Highly recommended!",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, CloudNine Solutions",
                content:
                  "From concept to deployment, Union Software delivered excellence at every stage. A true partner in our success.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                // Usamos bg-card o un color ligeramente diferente para la tarjeta y un borde sutil
                className="bg-card border border-border/50 hover:shadow-xl hover:shadow-purple-600/20 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-purple-600 text-purple-600"
                      />
                    ))}
                  </div>
                  {/* CardDescription será text-muted-foreground por defecto */}
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col items-start">
                  {/* El nombre debe ser claro (text-foreground) */}
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;