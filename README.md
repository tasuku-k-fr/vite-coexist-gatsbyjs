# vite-coexist-gatsbyjs

vite + react and gatsbyjs coexist without conflict

# vite + react と gatsbyjs の共存

力技です。

- gatsbyjs をベースとします。
- gastby-node による生成は vite では行われません。
- npm run dev(vite)で src/pages を変更できます。gatsby develop より軽くスタートできます。
- Vite_App_root に vite の app root の設定などを入れ、vite はその設定を見ています。
- ./tsconfig.json は gatsbyjs 用です。vite 用は Vite_App_root の中にあります。
- webpack をやめたわけではありません。あくまで共存です。

## script

`npm run dev`は vite です
`npm run build:gatsby`で gatsby で build できます
