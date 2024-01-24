import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(
  options: BuildOptions,
): Configuration["resolve"] {
  const { paths } = options;

  return {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": paths.src,
    },
  };
}
