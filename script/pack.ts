import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/gigit.ts"],
  outdir: "dist",
  minify: true,
  platform: "node",
  bundle: true,
});
