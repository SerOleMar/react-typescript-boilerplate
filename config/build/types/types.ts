export type BuildMode = "production" | "development";

export interface BuildPaths {
  output: string;
  entry: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  port: number;
  mode: BuildMode;
  paths: BuildPaths;
  analyzer: boolean;
}
