import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { IRoute } from "./typing";

const RouteWithSubRoutes = (route: IRoute) => {
  return (
    <Suspense fallback={route.fallback}>
      <Route path={route.path} exact={route.exact}>
        {route.component && <route.component routes={route.routes} />}
      </Route>
    </Suspense>
  );
};

export default RouteWithSubRoutes;
