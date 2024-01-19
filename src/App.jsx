import { Suspense, lazy } from "react"

import { Router } from "./Router"
import SearchPage from "./pages/Search.jsx"
import { Route } from "./Route"
import { Page404 } from "./pages/404.jsx"

const lazyAboutPage = lazy(() => import("./pages/About.jsx"))
const lazyHomePage = lazy(() => import("./pages/Home.jsx"))

const routes = [
  {
    path: "/search/:query",
    component: SearchPage
  },
]

export function App() {
  return (
    <main>
      <Suspense  fallback={ <h2>Cargando</h2> }>
        <Router  defaultComponent={Page404} >
          <Route path="/" component={lazyHomePage} ></Route>
          <Route path="/about" component={lazyAboutPage} ></Route>
        </Router>
      </Suspense>
    </main>
  )
}




