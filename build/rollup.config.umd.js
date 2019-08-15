import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-tabs',
    file: 'dist/vue-tabs.umd.js',
    format: 'umd',
  },
})

export default config
