import { Link } from "../Link"

export default function HomePage() {
    return (
      <>
        <h1>Inicio</h1>
        <div>
          <img src="https://media.licdn.com/dms/image/C5612AQHhk7J3UAZTww/article-cover_image-shrink_600_2000/0/1592367423667?e=2147483647&v=beta&t=5s1NExqYDElmR8M7YJjB6MOQ4LUL8YsJ_AOj_QBi94I" alt="" />
          <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
        </div>
        <Link to="/about" >Ir a sobre nosotros</Link>
      </>
    )
  }