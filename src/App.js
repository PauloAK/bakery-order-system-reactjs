import SignIn from './Pages/Auth/SignIn';
import {
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from './Components/Routing/PrivateRoute';
import Home from './Pages/App/Home';
import NotFound from './Pages/NotFound';
import Products from './Pages/App/Products';

function App() {
    return (
        <Switch>
            <Route path="/signin">
                <SignIn />
            </Route>
            <PrivateRoute exact path="/">
                <Home />
            </PrivateRoute>
            <PrivateRoute path="/products">
                <Products />
            </PrivateRoute>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}

export default App;