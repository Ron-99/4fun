import Header from './components/Header';
import Home from './pages/Home'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Register from "./pages/Register";
import Adm from "./pages/Adm";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/signup/:id', name: 'Register', component: Register },
  { path: '/D56B699830E77BA53855679CB1D252DA', name: 'Adm', component: Adm },
]

function Routes(){
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        {
          routes.map(({path, component}) => (
            <Route key={path} exact path={path} component={component} />
          ))
        }
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
