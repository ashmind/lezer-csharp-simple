import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/parser.js',
  output: [{
    format: 'cjs',
    file: './dist/index.cjs'
  }, {
    format: 'es',
    file: './dist/index.es.js'
  }],
  external(id) {
    return !path.isAbsolute(id)
        && !id.startsWith('.');
  },
  plugins: [
    nodeResolve()
  ]
};
