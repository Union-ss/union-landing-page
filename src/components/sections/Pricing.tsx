import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div>
      {" "}
      {/* Usamos bg-background para integrarse con el tema oscuro general, o un color más oscuro si la sección lo requiere */}
      <section id="pricing" className="py-24 bg-background"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/10 text-purple-400 border-purple-600/20">
              Pricing Plans
            </Badge>
            {/* Cambiado de text-background a text-foreground para asegurar texto claro sobre fondo oscuro */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4  text-foreground"> 
              Choose Your <span className="gradient-text">Perfect Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$49",
                description: "Perfect for small projects and startups",
                features: [
                  "5 Projects",
                  "10GB Storage",
                  "Basic Support",
                  "99.9% Uptime",
                  "SSL Certificate",
                ],
                recommended: false,
              },
              {
                name: "Professional",
                price: "$149",
                description: "Ideal for growing businesses",
                features: [
                  "Unlimited Projects",
                  "100GB Storage",
                  "Priority Support",
                  "99.99% Uptime",
                  "Advanced Security",
                  "Custom Domain",
                  "Analytics Dashboard",
                ],
                recommended: true,
              },
              {
                name: "Enterprise",
                price: "$499",
                description: "For large-scale operations",
                features: [
                  "Everything in Pro",
                  "Unlimited Storage",
                  "24/7 Premium Support",
                  "Dedicated Account Manager",
                  "Custom Integrations",
                  "SLA Guarantee",
                  "White Label Options",
                ],
                recommended: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                // Ajustada la tarjeta para un mejor Dark Mode:
                // Usamos 'bg-card' para el fondo, 'border-border/50' para el borde por defecto.
                className={`bg-card border border-border/50 backdrop-blur-sm hover:border-purple-600/50 hover:shadow-2xl transition-all duration-300 relative ${
                  plan.recommended
                    ? "border-purple-600 shadow-xl shadow-purple-600/20" // Mantener el estilo recomendado
                    : ""
                }`}
              >
                {plan.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-primary-foreground">
                    Recommended
                  </Badge>
                )}
                <CardHeader>
                  {/* El texto de la tarjeta será claro por defecto (foreground) */}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle> 
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                   variant="hero"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;