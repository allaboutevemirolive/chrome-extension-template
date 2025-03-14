import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'public/manifest.json',
                    dest: '.',
                }
            ],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                main: './index.html',
                "content-script": './src/content-script.ts',
                "service-worker": './src/service-worker.ts'
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: 'chunks/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
});
