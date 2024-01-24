import { RuleSetRule } from "webpack";

export function buildImgLoader(): RuleSetRule[] {
  return [
    {
      test: /\.(png|jpe?g|gif|ico)$/i,
      type: "asset/resource",
      generator: {
        filename: "assets/img/[hash][ext]",
      },
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    },
    {
      test: /\.svg$/i,
      issuer: { not: /\.[jt]sx?$/ },
      type: "asset/resource",
      generator: {
        filename: "assets/img/[hash][ext]",
      },
    },
  ];
}
