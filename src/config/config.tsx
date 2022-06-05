import { lazy } from "react"
import { IRoute } from "./typing"

export const routes: IRoute[] = [
  {
    path: "/tacos",
    component: lazy(() => import("../pages/Tacos")),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
    routes: [
      {
        path: "/tacos/bus",
        exact: false,
        private: false,
        fallback: <div> Loading... </div>,
        component: lazy(() => import("../pages/Bus")),
      },
      {
        path: "/tacos/cart",
        exact: false,
        private: false,
        fallback: <div> Loading... </div>,
        component: lazy(() => import("../pages/Cart")),
      },
    ],
  },
  {
    path: "/sandwiches",
    component: lazy(() => import("../pages/Sandwiches")),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
]
