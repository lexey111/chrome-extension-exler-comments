import fs from 'fs'

export const copyManifestPlugin = () => ({
    name: 'copy-manifest-plugin',
    setup(build) {
        build.onEnd(async () => {
            try {
                if (fs.existsSync('./dist/manifest.json')) {
                    fs.rmSync('./dist/manifest.json')
                }
                fs.copyFileSync('./src/manifest.json', './dist/manifest.json')
            } catch (e) {
                // console.error('Failed to copy file:', e)
            }
        })
    },
})