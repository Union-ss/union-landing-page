import React, { useRef, useEffect, useCallback } from "react";
import { ChevronRight } from "lucide-react";
// Asumo que estas importaciones son válidas en tu proyecto
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import heroImage from "@/assets/bg-purple.jpg";

const PARTICLE_COLOR: string = "168, 85, 247"; // RGB de purple-600
const PARTICLE_COUNT: number = 60;
const PARTICLE_SPEED: number = 0.15;
const CONNECTION_DISTANCE: number = 150;

// Clase para representar una partícula
class Particle {
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;
  public size: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * PARTICLE_SPEED;
    this.vy = (Math.random() - 0.5) * PARTICLE_SPEED;
    this.size = Math.random() * 2 + 0.5;
  }

  update(width: number, height: number): void {
    // Mantener la posición dentro de los límites
    this.x += this.vx;
    this.y += this.vy;

    // Invertir velocidad al tocar un borde
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.8)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// --- FIN: Lógica del Sistema de Partículas ---

const Hero: React.FC = () => {
  // Tipado de useRef
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const particles = useRef<Particle[]>([]);

  // Función de inicialización y animación con tipado de retorno
  const initCanvas = useCallback((): (() => void) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return () => {
        /* No-op cleanup */
      };
    }

    // Aseguramos que el contexto exista
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("No se pudo obtener el contexto 2D del canvas.");
      return () => {
        /* No-op cleanup */
      };
    }

    // Necesitamos el elemento contenedor para las dimensiones
    const container = canvas.parentElement;
    if (!container) {
      console.error("El canvas debe estar dentro de un elemento contenedor.");
      return () => {
        /* No-op cleanup */
      };
    }

    // Función para ajustar el tamaño del canvas
    const resizeCanvas = (): void => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      // Regenerar partículas en caso de redimensionamiento severo o inicialización
      if (particles.current.length === 0) {
        particles.current = Array.from({ length: PARTICLE_COUNT }, () => {
          return new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        });
      }
    };

    // Inicializar y manejar resize
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Bucle de animación
    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p1 = particles.current[i];

        // Llamada tipada
        p1.update(canvas.width, canvas.height);
        p1.draw(ctx);

        // Conectar partículas cercanas
        for (let j = i + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );

          if (distance < CONNECTION_DISTANCE) {
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    // Función de limpieza
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Dependencia vacía: el mouse ya no afecta la animación

  // Efecto para la inicialización
  useEffect(() => {
    // Llamar a la inicialización del canvas y animación
    const cleanup = initCanvas();
    return cleanup;
  }, [initCanvas]);

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Union Software Hero"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/80 to-foreground"></div>
        </div>
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-40"
          />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
            "radial-gradient(circle at 50% 0%, hsl(267 66% 51% / 0.15), transparent 50%)",
          }}
        ></div>
          

        <div className="container mx-auto px-4 z-10 text-center">
          <Badge className="mb-6 bg-purple-600/10 text-purple-600 border-purple-600/20 hover:bg-purple-600/20 shadow-xl shadow-purple-600/80">
            Innovate. Build. Scale.
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-background">
            Transform Your Digital
            <br />
            <span className="gradient-text">Vision Into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Cutting-edge web development and SaaS solutions that propel your
            business into the future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-muted-foreground italic">
            "Where innovation meets execution"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
