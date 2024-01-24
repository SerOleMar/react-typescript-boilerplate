import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildScssLoader } from "./loaders/buildScssLoader";
import { buildFontLoader } from "./loaders/buildFontLoader";
import { buildImgLoader } from "./loaders/buildImgLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const imgLoader = buildImgLoader();
  const fontLoader = buildFontLoader();
  const scssLoader = buildScssLoader(options);
  const babelLoader = buildBabelLoader(options);

  return [scssLoader, babelLoader, ...imgLoader, fontLoader];
}
