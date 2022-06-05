import React from "react"
import { Link } from "react-router-dom"
import RouteWithSubRoutes from "../config/RouteWithSubRoutes"
import { IRoute } from "../config/typing"
const Tacos: React.FC<{ routes: IRoute[] }> = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to="/tacos/bus">bus</Link>
      </li>
      <li>
        <Link to="/tacos/cart">cart</Link>
      </li>
    </ul>
    {routes.map((route) => (
      <RouteWithSubRoutes {...route} key={route.path} />
    ))}
  </div>
)
export default Tacos
