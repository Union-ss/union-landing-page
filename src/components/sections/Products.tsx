import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

const Products = () => {
  // 1. Variante del Encabezado: Solo opacidad y escala (sin Y)
  const headerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 2. Variante de la Tarjeta (unificada): Solo opacidad y escala (sin X)
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const products = [
    {
      name: "Union Cloud",
      description:
        "Enterprise-grade cloud infrastructure with auto-scaling, global CDN, and 99.99% uptime guarantee.",
      features: ["Auto-scaling", "Global CDN", "Real-time Analytics"],
    },
    {
      name: "Union CMS",
      description:
        "Headless content management system with powerful APIs and intuitive content editing experience.",
      features: ["Headless Architecture", "RESTful APIs", "Visual Editor"],
    },
    {
      name: "Union Analytics",
      description:
        "Advanced analytics platform providing actionable insights with AI-powered recommendations.",
      features: ["AI Insights", "Custom Reports", "Real-time Data"],
    },
    {
      name: "Union Commerce",
      description:
        "Complete e-commerce solution with payment processing, inventory management, and marketing tools.",
      features: ["Payment Gateway", "Inventory System", "Marketing Suite"],
    },
  ];

  return (
    <section id="products" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <Badge className="mb-4 bg-purple-600/10 text-purple-400 border-purple-600/20">
            Our Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Products Built for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our suite of powerful products designed to accelerate your
            success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants} // Usamos la variante unificada
            >
              <Card
                className="bg-card border border-border/50 text-foreground hover:shadow-2xl h-full
                hover:shadow-purple-600/20 transition-all duration-300 group
                relative rounded-xl flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-purple-400 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-purple-600/10 text-foreground hover:text-purple-400"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;