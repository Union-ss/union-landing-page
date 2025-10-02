import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Badge } from "../ui/badge";
import { Code2, Cloud, Rocket, Shield, Zap, Users } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";

const features = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies and best practices for optimal performance.",
    className: "md:col-span-2",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "SaaS Solutions",
    description:
      "Scalable software-as-a-service platforms designed to grow with your business needs.",
    className: "md:col-span-1",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Rapid Deployment",
    description:
      "Launch faster with our streamlined development process and automated deployment pipelines.",
    className: "md:col-span-1",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description:
      "Bank-level security protocols to protect your data and ensure compliance with industry standards.",
    className: "md:col-span-2",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description:
      "Optimized architecture ensuring blazing-fast load times and exceptional user experiences.",
    className: "md:col-span-2",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Dedicated Support",
    description:
      "24/7 expert support team ready to assist you at every step of your journey.",
    className: "md:col-span-1",
  },
];

const Features = () => {
  // Variantes para el encabezado: solo opacidad y pequeña escala
  const headerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 }, // Empezar un poco más pequeño y transparente
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variantes para las tarjetas: solo opacidad y pequeña escala
  const itemVariants: Variants = { // Usamos una sola variante ya que no hay desplazamiento lateral
    hidden: { opacity: 0, scale: 0.95 }, // Empezar un poco más pequeño y transparente
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-border/20">
            Our Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Powerful Features for{" "}
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, scale, and succeed in the digital
            landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={feature.className}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants} // Usamos la misma variante para todas las tarjetas
            >
              <Card 
                className="
                  h-full relative overflow-hidden rounded-xl p-6 shadow-lg 
                  backdrop-filter backdrop-blur-xl text-foreground bg-card 
                  border border-border/50 
                  
                  transition-all duration-300 
                  hover:scale-[1.02] hover:shadow-purple-600/20 hover:border-purple-600/50
                "
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 transition-colors text-purple-600">
                    <div className="text-purple-400">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-2xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;