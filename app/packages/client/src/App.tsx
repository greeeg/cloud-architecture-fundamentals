import React, { lazy, Suspense } from "react";
import { Route, HashRouter } from "react-router-dom";

const LazyHome = lazy(() =>
  import(/* webpackChunkName: "screens-home" */ "./screens/Home").then((module) => ({
    default: module.Home,
  })),
);

const LazyAsset = lazy(() =>
  import(/* webpackChunkName: "screens-home" */ "./screens/Asset").then((module) => ({
    default: module.Asset,
  })),
);

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HashRouter>
        <Route path="/" exact component={LazyHome} />
        <Route path="/assets/:id" exact component={LazyAsset} />
      </HashRouter>
    </Suspense>
  );
};

export default App;
