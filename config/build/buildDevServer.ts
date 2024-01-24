import type { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): Configuration {
  const { port } = options;

  return {
    port: port ?? 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  };
}
