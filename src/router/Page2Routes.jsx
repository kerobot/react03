import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// ページ2の画面遷移の情報を配列で管理
export const page2Routes = [
  // ページ2への遷移情報
  {
    path: "/",
    exact: true,
    children: <Page2 />,
  },
  // ページ2パラメータありへの遷移情報
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />,
  },
];
