import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      {/* URLパラメータを使用したページ遷移 */}
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      {/* クエリパラメータを使用したページ遷移 */}
      <Link to="/page2/100?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
