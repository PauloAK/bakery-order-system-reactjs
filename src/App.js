import SignIn from './Pages/Auth/SignIn';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from './Components/Routing/PrivateRoute';
import Home from './Pages/App/Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signin" label="Login">
                    <SignIn />
                </Route>
                <PrivateRoute path="/" label="Início">
                    <Home />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;