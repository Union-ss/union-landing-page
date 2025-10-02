
const UnionLogo = ({ size = 40, className = '' }) => {
  // Define los colores del degradado para usar en el SVG
  const gradientId = "unionSoftwareGradient";

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" // Un viewBox estándar para un lienzo cuadrado
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Permite pasar clases de Tailwind desde el padre
    >
      <defs>
        {/* Definición del degradado púrpura a magenta */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" /> {/* primary */}
          <stop offset="100%" stopColor="#9333EA" /> {/* purple-600 */}
        </linearGradient>
      </defs>

      {/* Círculo exterior (fondo de la "U") */}
      <circle cx="50" cy="50" r="48" stroke={`url(#${gradientId})`} strokeWidth="4" fill="white" fillOpacity="0.1" />

      {/* La forma de la "U" con trazo de circuito */}
      <path 
        d="M 25 20 C 25 10 35 10 35 20 L 35 70 C 35 80 45 80 45 70 L 45 30 C 45 20 55 20 55 30 L 55 70 C 55 80 65 80 65 70 L 65 20 C 65 10 75 10 75 20"
        stroke={`url(#${gradientId})`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Añadir algunos puntos de circuito para dar el efecto tech */}
      <circle cx="28" cy="30" r="3" fill={`url(#${gradientId})`} />
      <circle cx="32" cy="50" r="3" fill={`url(#${gradientId})`} />
      <circle cx="38" cy="70" r="3" fill={`url(#${gradientId})`} />

      <circle cx="62" cy="30" r="3" fill={`url(#${gradientId})`} />
      <circle cx="68" cy="50" r="3" fill={`url(#${gradientId})`} />
      <circle cx="72" cy="70" r="3" fill={`url(#${gradientId})`} />

      {/* Flechas estilizadas en los extremos de la U para dar la idea de "unión" o "progreso" */}
      <path 
        d="M 25 20 L 20 25 L 25 30" 
        stroke={`url(#${gradientId})`} 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
      <path 
        d="M 75 20 L 80 25 L 75 30" 
        stroke={`url(#${gradientId})`} 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />

    </svg>
  );
};

export default UnionLogo;