import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../src/pages/index'; // GeneralProductsPage.tsx をエイリアス経由でインポート
// 自動生成されたルートコンポーネントを同じディレクトリからインポート
import GeneratedRoutes from './GeneratedRoutes'; 

// トップページ用のコンポーネント（必要に応じて変更してください）
const HomePage: React.FC = () => (
  <Index />
);

// 404ページ用のコンポーネント（必要に応じて変更してください）
const NotFoundPage: React.FC = () => (
  <div>
    <h2>404 - ページが見つかりません</h2>
    <p>お探しのページは存在しないか、移動した可能性があります。</p>
  </div>
);

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* ルートパス ("/") にアクセスしたときに表示されるコンポーネント */}
        <Route path="/" element={<HomePage />} />
        {GeneratedRoutes()}

        {/* 上記のどのパスにもマッチしなかった場合に表示されるコンポーネント */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;