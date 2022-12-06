import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // 遷移元から受け取ったURLパラメータの取得
  const { id } = useParams();
  // 遷移元から受け取ったクエリパラメータの取得
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name") || "なし"}です</p>
    </div>
  );
};
