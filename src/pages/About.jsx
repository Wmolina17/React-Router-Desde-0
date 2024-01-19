import { Link } from "../Link"

export default function AboutPage() {
  return (
    <>
      <h1>Sobre nosotros</h1>
      <div>
        <img src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg" alt="foto xd de google" />
        <p>Hola soy <b>william</b> y esto es un react router dom clone</p>
      </div>
      <Link to="/" >ir a inicio</Link>
    </>
  )
}