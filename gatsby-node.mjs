// gatsby-node.js
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // 'src' というエイリアスを追加し、プロジェクトルートの 'src' ディレクトリを指すようにする
        src: path.resolve(__dirname, "src/"),
      },
      // もし特定のファイル拡張子を解決したい場合は以下も追加できますが、
      // .js, .jsx, .ts, .tsx などは通常デフォルトで含まれています。
      // extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    },
  });
};
