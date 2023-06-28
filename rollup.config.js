/* eslint-disable import/no-anonymous-default-export */
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import resolvePng from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import svg from 'rollup-plugin-svg';
import svgr from '@svgr/rollup';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      postcss({
        plugins: [],
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled'
      }),
      resolve({
        extensions: ['.jsx', '.scss']
      }),
      terser(),
      commonjs(),
      resolvePng(),
      json(),
      svg(),
      svgr(),
    ],
    external: id => /react|react-dom|ant-design|antd|object-assign/.test(id)
  }
];