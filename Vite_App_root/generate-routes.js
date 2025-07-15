// Vite_App_root/generate-routes.js
// このファイルは scripts/generate-routes.js によって自動生成されました。
// このファイルを直接変更しないでください！

import fs from 'fs';
import path from 'path';

// package.json が存在するプロジェクトのルートディレクトリを取得
const projectRoot = process.cwd();

// src/pages ディレクトリへの絶対パス
const pagesDir = path.resolve(projectRoot, 'src/pages');
// 生成されるルートファイルが保存される絶対パス
const outputFile = path.resolve(projectRoot, 'Vite_App_root/GeneratedRoutes.tsx');

/**
 * src/pages ディレクトリを再帰的に走査し、ルート設定を生成します。
 * @param {string} currentDir - 現在走査しているディレクトリの絶対パス
 * @param {string} baseRoute - 現在のディレクトリに対応するURLのベースパス
 * @returns {Array<Object>} ルート設定のオブジェクト配列
 */
function generateRoutesConfig(currentDir, baseRoute = '') {
  let routeConfig = [];
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    // src/pages からの相対パスを生成 (例: 'ac/individual/index.tsx')
    const relativePathFromPages = path.relative(pagesDir, fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      // サブディレクトリを再帰的に探索
      routeConfig = routeConfig.concat(generateRoutesConfig(fullPath, baseRoute));
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      // .tsx ファイルの場合にURLパスを決定
      let urlPath = relativePathFromPages.replace(/\.tsx$/, ''); // 例: 'ac/individual/index'
      
      // 'index.tsx' の場合はURLから '/index' を削除し、クリーンなURLにする
      // 例: 'ac/individual/index' は 'ac/individual' になる
      if (urlPath.endsWith('/index')) {
        urlPath = urlPath.slice(0, -6); // '/index' を削除
      }
      
      // ベースルートを付与し、二重スラッシュをクリーンアップ
      urlPath = `${baseRoute}/${urlPath}`.replace(/\/\/+/g, '/');
      
      // ルートパスの場合の特別な調整 (例: src/pages/index.tsx が存在する場合)
      if (urlPath === '') urlPath = '/';

      // 生成される generated-routes.tsx ファイルからページコンポーネントへのインポートパスを生成
      // (例: Vite_App_root/generated-routes.tsx から src/pages/ac/individual/index.tsx への相対パス)
      const componentImportPath = path.relative(path.dirname(outputFile), fullPath).replace(/\\/g, '/');

      // 遅延ロード用のユニークなコンポーネント名を生成 (例: LazyAcIndividualPage)
      const componentName = `Lazy${relativePathFromPages.replace(/[^a-zA-Z0-9]/g, '')}`;

      routeConfig.push({
        urlPath,
        componentImportPath,
        componentName,
      });
    }
  }
  return routeConfig;
}

// ルート設定を生成
const routes = generateRoutesConfig(pagesDir, '');

// generated-routes.tsx ファイルの内容を構築開始
let outputContent = `// このファイルは scripts/generate-routes.js によって自動生成されました。
// このファイルを直接変更しないでください！

import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

`;

// 各コンポーネントの遅延ロードのインポート文を追加
routes.forEach(route => {
    outputContent += `const ${route.componentName} = lazy(() => import('${route.componentImportPath}'));\n`;
});

// GeneratedRoutesContent を直接 JSX フラグメントとしてエクスポート
outputContent += `
const GeneratedRoutes = () => {
  return (
    <>
`;

// 各ルートに対応する <Route> コンポーネントを追加
routes.forEach(route => {
    outputContent += `      <Route path="${route.urlPath}" element={<${route.componentName} />} />\n`;
});

// React Fragment を閉じ、エクスポート
outputContent += `    </>
  );
};
export default GeneratedRoutes;
`;

// 生成したコンテンツを出力ファイルに書き込む
fs.writeFileSync(outputFile, outputContent);
console.log(`ルートが ${outputFile} に生成されました`);