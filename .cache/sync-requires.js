
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-ac-index-tsx": preferDefault(require("/Users/tasuku-kuroiwa/workspace/200_practice/vite_coexist_gatsbyjs/src/pages/ac/index.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/tasuku-kuroiwa/workspace/200_practice/vite_coexist_gatsbyjs/src/pages/index.tsx"))
}

