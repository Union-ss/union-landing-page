import { Badge } from "../ui/badge";
import { Code2, Cloud, Rocket, Shield, Zap, Users } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";

const Features = () => {
  return (
    <div>
      {" "}
      <section id="features" className="py-24 relative bg-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/10 text-purple-500 border-primary/20">
              Our Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-background">
              Powerful Features for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, scale, and succeed in the digital
              landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Web Development",
                description:
                  "Custom web applications built with cutting-edge technologies and best practices for optimal performance.",
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "SaaS Solutions",
                description:
                  "Scalable software-as-a-service platforms designed to grow with your business needs.",
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Rapid Deployment",
                description:
                  "Launch faster with our streamlined development process and automated deployment pipelines.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description:
                  "Bank-level security protocols to protect your data and ensure compliance with industry standards.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description:
                  "Optimized architecture ensuring blazing-fast load times and exceptional user experiences.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Dedicated Support",
                description:
                  "24/7 expert support team ready to assist you at every step of your journey.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className=" relative overflow-hidden rounded-xl p-6 shadow-lg backdrop-filter backdrop-blur-xl text-background bg-background/0 border border-white/10 dark:bg-neutral-700/20 dark:border-neutral-800/30"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors text-purple-600">
                    <div className="text-purple-600">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
