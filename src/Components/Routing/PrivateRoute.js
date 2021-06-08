import {
    Route,
    Redirect
} from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    console.log(auth);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.check() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;