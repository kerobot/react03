import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // 別ページに state として渡す配列
  const arr = [...Array(100).keys()];
  console.log(arr);

  // history を利用したページ遷移
  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      {/* state を指定したページ遷移 */}
      <Link to={{pathname: "/page1/detailA", state: arr}}>DetailA</Link>
      <br />
      {/* 通常のページ遷移 */}
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      {/* history を利用したページ遷移 */}
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
