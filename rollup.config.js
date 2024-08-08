import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	input: "src/main.js",
	output: [
		{ banner: "/*! common.banner */", format: "es", file: "dist/index.es.js" },
		{ banner: "/*! common.banner */", format: "cjs", file: "dist/index.cjs.js" },
		{ banner: "/*! common.banner */", format: "amd", file: "dist/index.amd.js" },
		{ banner: "/*! common.banner */", format: "umd", file: "dist/index.umd.js", name: "clone" },
		{ banner: "/*! common.banner */", format: "iife", file: "dist/index.iife.js", name: "clone" },
		{ banner: "/*! common.banner */", format: "system", file: "dist/index.system.js" },
	],
	plugins: [json(), nodeResolve(), babel({ browserslistConfigFile: true })],
};
