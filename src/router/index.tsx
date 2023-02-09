import JobDetail from "../pages/JobDetail"
import Jobs from "../pages/Jobs"
import Login from "../pages/Login"
import Register from "../pages/Register"

export const NonAuthRoutes = [
    {
        path: "/",
        component: <Login />
    },
    {
        path: "/register",
        component: <Register />
    },
]

export const AuthRoutes = [
    {
        path: "/jobs",
        component: <Jobs />
    },
    {
        path: "/jobs/detail/:id",
        component: <JobDetail />
    }
]