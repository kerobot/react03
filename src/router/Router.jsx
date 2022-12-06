import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/* ルートパスを完全一致させたい場合は exact を指定する */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        // props.match.url を分割代入で取り出す
        render={({ match: { url } }) => (
          <Switch>
            {/* 遷移先の情報を配列で管理してルーターを動的に生成 */}
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        // props.match.url を分割代入で取り出す
        render={({ match: { url } }) => (
          <Switch>
            {/* 遷移先の情報を配列で管理してルーターを動的に生成 */}
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
