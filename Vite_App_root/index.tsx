import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter'; // AppRouter.tsx が Vite_App_root ディレクトリ内にあると想定
import 'src/scss/index.scss'; // src/scss/index.scss をエイリアス経由で読み込む

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);