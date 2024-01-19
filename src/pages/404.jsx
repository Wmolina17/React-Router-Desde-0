import { Link } from "../Link";

export function Page404() {
    return (
        <>
            <h1> no encontrada, Error 404</h1>
            <img src="https://pbs.twimg.com/tweet_video_thumb/EVGejxRUwAA9AyW.jpg" alt="" />
            <div>
                <Link to="/" >Ir a Inicio</Link>
            </div>
        </>
    )
}