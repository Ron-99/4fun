import Header from './components/Header';
import Home from './pages/Home'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Register from "./pages/Register";
import Adm from "./pages/Adm";
import Login from "./pages/Login";
import {useIsAuthQuery} from "./services/Users/isAuthQuery";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/signin', name: 'Login', component: Login },
  { path: '/signup/:id', name: 'Register', component: Register },
  { path: '/admin/subscriptions', name: 'Adm', component: Adm, privateRoute: true, admin: true },
]



const PrivateRoute = ({ component: Component, data, ...rest }) => {
    return(
    <Route
      {...rest}
      render={props =>
        data ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

const LoginRoute = ({ component: Component, data, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props =>
        data ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

const AdminRoute = ({ component: Component, data, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props =>
        data.role === 'ADMIN' ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function Routes(){
  const {data, isLoading} = useIsAuthQuery()

  return(
    <BrowserRouter>
      <Header />
      <Switch>
        {
          !isLoading &&
          routes.map(({path, component, privateRoute, admin, name}) => (
            privateRoute ?
              admin ?
                <AdminRoute key={path} exact path={path} data={data} component={component} />
                :
                <PrivateRoute key={path} exact path={path} data={data} component={component} />
                :
                name !== 'Login' ?
                  <Route key={path} exact path={path} component={component} />
                :
                  <LoginRoute key={path} exact path={path} data={data} component={component} />
          ))
        }
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
