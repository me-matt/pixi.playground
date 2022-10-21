import commonjs from '@rollup/plugin-commonjs';
import copy from "rollup-plugin-copy";
import serve from 'rollup-plugin-serve';

export default [
  {
    input: 'src/main.ts',
    output: {
      dir: 'dist',
      preserveModules: true,
    },
    plugins: [
      commonjs({
        include: [ ".src/main.ts", "node_modules/pixi.js/**" ],
      }),
      copy({
        targets: [
          { src: 'src/assets/**/*', dest: 'dist/assets' },
          { src: 'static/**/*', dest: 'dist' }
        ]
      }),
      // serve('dist'),
    ],
    external: ['pixi.js']
  }
];