import {copyManifestPlugin} from './utils/copy-manifest.js'

export const PORT = 3000

export const SOURCE_DIR = './src'
export const OUTPUT_DIR = './dist'

export const DEBOUNCE_BUILD_TIME = 500

export const buildConfig = {
    entryPoints: [
        'src/content-script.ts',
        'src/popup.tsx',
        'src/settings.tsx'
    ],
    assetNames: 'assets/[name]',
    chunkNames: '[ext]/[name]',
    outdir: OUTPUT_DIR,
    bundle: true,
    minify: false,
    plugins: [
        copyManifestPlugin()
    ],
}

