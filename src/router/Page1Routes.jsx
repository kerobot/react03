import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

// ページ1の画面遷移の情報を配列で管理
export const page1Routes = [
  // ページ1への遷移情報
  {
    path: "/",
    exact: true,
    children: <Page1 />,
  },
  // ページ1詳細Aへの遷移情報
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />,
  },
  // ページ1詳細Bへの遷移情報
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />,
  },
];
