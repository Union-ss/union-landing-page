import { useState, useEffect } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // efecto que aplica la clase "dark" al <html>
  useEffect(() => {
    // Intentar leer la preferencia del sistema operativo si no hay tema guardado
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (initialTheme) {
      setTheme(initialTheme);
    } else if (systemPrefersDark) {
        setTheme("dark");
    }

   
  }, []);

  // efecto que aplica la clase "dark" al <html> y guarda la preferencia
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Se mantiene la estructura y las clases visuales de Toggle, ya que están diseñadas para funcionar con la clase 'dark' en el <html>
  return (
    <div>
      <Toggle
        variant="outline"
        className="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent border-none shadow-none"
        pressed={theme === "dark"}
        onPressedChange={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <MoonIcon
          size={16}
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          aria-hidden="true"
        />
        <SunIcon
          size={16}
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  )
}