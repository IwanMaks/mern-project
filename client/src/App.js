import {BrowserRouter} from 'react-router-dom'
import useRoutes from "./routes"
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./context/AuthContext"
import 'materialize-css'
import NavBar from "./components/NavBar";
import {Loader} from "./components/Loader";

function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth)

    if (!ready) {
        <Loader />
    }
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuth
        }}>
            <BrowserRouter>
                { isAuth && <NavBar /> }
                <div className="container">
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
