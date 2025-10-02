import { Mail } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {" "}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/10 text-purple-400 border-purple-600/20">
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your ideas into reality? We're here to help
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 text-foreground"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      // Usamos border-input, bg-input o simplemente omitimos para usar el estilo por defecto de Shadcn/Tailwind
                      // Aquí usamos el estilo por defecto que se adapta al tema
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    <Mail className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;