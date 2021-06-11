import SignIn from './Pages/Auth/SignIn';
import {
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from './Components/Routing/PrivateRoute';
import Home from './Pages/App/Home';
import NotFound from './Pages/NotFound';
import ProductIndex from './Pages/App/Products/ProductIndex';
import ProductForm from './Pages/App/Products/ProductForm';

function App() {
    return (
        <Switch>
            <Route path="/signin">
                <SignIn />
            </Route>
            <PrivateRoute exact path="/">
                <Home />
            </PrivateRoute>
            <PrivateRoute path="/products" exact>
                <ProductIndex />
            </PrivateRoute>
            <PrivateRoute path="/products/create" exact>
                <ProductForm />
            </PrivateRoute>
            <PrivateRoute path="/products/:id" exact>
                <ProductForm />
            </PrivateRoute>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}

export default App;