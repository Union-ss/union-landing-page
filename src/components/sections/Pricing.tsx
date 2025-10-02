import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div>
      {" "}
      <section id="pricing" className="py-24 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/10 text-purple-600 border-purple-600/20">
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text text-background">
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
                className={`bg-black/10 border-white/10 text-background backdrop-blur-2xl  hover:shadow-2xl transition-all duration-300 relative ${
                  plan.recommended
                    ? "border-purple-600 shadow-xl shadow-purple-600/20 scale"
                    : ""
                }`}
              >
                {plan.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-purple-600-foreground">
                    Recommended
                  </Badge>
                )}
                <CardHeader>
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
