import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // 遷移元から受け取った state の取得
  const { state } = useLocation();
  console.log(state);
  // history を利用したページ遷移
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
