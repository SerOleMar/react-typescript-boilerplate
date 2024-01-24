import { BuildOptions } from "../types/types";
import { RuleSetRule } from "webpack";

export function buildBabelLoader(options: BuildOptions): RuleSetRule {
  const { mode } = options;
  const isDev = mode === "development";

  const plugins = [];

  if (isDev) {
    plugins.push(require.resolve("react-refresh/babel"));
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        // TODO: нужен ли configFile?
        configFile: "./babel.config.json",
        plugins: plugins.length ? plugins : undefined,
      },
    },
  };
}
