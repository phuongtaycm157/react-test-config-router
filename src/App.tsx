import "./styles.css";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { routes } from "./config/config";
import RouteWithSubRoutes from "./config/RouteWithSubRoutes";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes {...route} key={route.path} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
