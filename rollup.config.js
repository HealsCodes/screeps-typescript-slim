'use strict';

import clear from 'rollup-plugin-clear';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import screeps from 'rollup-plugin-screeps';
import typescript from '@rollup/plugin-typescript';


let screepsEnvs;
let rollupCfg;
if (process.env.DEST) {
  screepsEnvs = require('./screeps.js');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  if ((rollupCfg = screepsEnvs[process.env.DEST]) == null) {
    throw new Error("Invalid destination");
  }
}

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
    sourcemap: true
  },

  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    clear({ targets: ['dist']}),
    resolve({ rootDir: 'src' }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    screeps({ config: rollupCfg, dryRun: rollupCfg == null })
  ]
}

