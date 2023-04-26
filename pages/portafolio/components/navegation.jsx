import Link from "next/link";
import Hotme from "./hotme"
const Navegation=() => {

return (
    
  <nav className="menu">
    <ul>
      <li>
        <Link href= "/portafolio/components/hotme">
          Acerca de mí
        </Link>
      </li>
      <li>
        <Link href="/portafolio/components/skills">
          Habilidades
        </Link>
      </li>
      <li>
        <Link href="/portafolio/components/projects">
          Proyectos
        </Link>
      </li>
      <li>
        <Link href="/portafolio/components/experience">
          Experiencia laboral
        </Link>
      </li>
      <li>
        <Link href="/portafolio/components/education">
          Educación
        </Link>
      </li>
      <li>
        <Link href="/portafolio/components/contact">
          Contacto
        </Link>
      </li>
    </ul>
  </nav>
);



}

export default Navegation