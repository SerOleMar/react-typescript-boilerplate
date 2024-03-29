import { RuleSetRule } from "webpack";
import { BuildOptions } from "../types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildScssLoader(options: BuildOptions): RuleSetRule {
  const { mode } = options;
  const isDev = mode === "development";

  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            // TODO: Проверить правильность имен css классов в localIdentName
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
}
