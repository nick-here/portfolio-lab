import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import LogOut from './components/auth/LogOut';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/logowanie' component={Login}></Route>
                <Route exact path='/rejestracja' component={Register}></Route>
                <Route exact path='/wylogowanie' component={LogOut}></Route>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
