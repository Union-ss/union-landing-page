import { Badge } from "../ui/badge";

const AboutUs = () => {
  return (
    <div>
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-600/10 text-purple-400 border-purple-600/20">
              About Us
            </Badge>
            {/* Cambiado de text-background a text-foreground para asegurar texto claro sobre fondo oscuro */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Building the{" "}
              <span className="gradient-text">Future of Software</span>
            </h2>
            {/* El texto principal sigue usando text-muted-foreground, lo cual es correcto en Dark Mode */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded in 2020, Union Software emerged from a vision to bridge
              the gap between cutting-edge technology and practical business
              solutions. Our team of expert developers, designers, and
              strategists work tirelessly to deliver software that doesn't just
              meet expectations—it exceeds them.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in the power of innovation combined with reliability.
              Every project we undertake is approached with the same dedication
              to excellence, whether it's a startup MVP or an enterprise-scale
              platform. Our mission is simple: empower businesses to achieve
              their digital ambitions through exceptional software
              craftsmanship.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "Team Members" },
                { number: "15+", label: "Countries Served" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;