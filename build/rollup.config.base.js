import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

const config = require('../package.json')

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      mainFields: ['module', 'jsnext:main', 'main', 'browser'],
    }),
    vue({}),
    babel({
      exclude: 'node_modules/**',
    }),
    cjs({
      exclude: 'src/**',
    }),
    replace({
      VERSION: JSON.stringify(config.version),
    }),
  ],
}
