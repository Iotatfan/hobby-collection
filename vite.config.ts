import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react'
import * as path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

const base = process.env.DEPLOY_TARGET === "github-pages" ? "/hobby-collection/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
    base,
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') }
        ],
    },
    plugins: [
        react(),
        visualizer() as PluginOption,
    ],
});
