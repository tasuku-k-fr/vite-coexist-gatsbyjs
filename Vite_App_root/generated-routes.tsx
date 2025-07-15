// このファイルは scripts/generate-routes.js によって自動生成されました。
// このファイルを直接変更しないでください！

import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Lazyacindextsx = lazy(() => import('../src/pages/ac/index.tsx'));
const Lazyindextsx = lazy(() => import('../src/pages/index.tsx'));

export const GeneratedRoutesContent = () => (
  <>
      <Route path="/ac" element={<Lazyacindextsx />} />
      <Route path="/index" element={<Lazyindextsx />} />
    </>
);
