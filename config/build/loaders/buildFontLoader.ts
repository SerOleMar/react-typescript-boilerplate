import { RuleSetRule } from "webpack";

export function buildFontLoader(): RuleSetRule {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      filename: "assets/fonts/[hash][ext]",
    },
  };
}
