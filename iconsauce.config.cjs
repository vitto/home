const customPlugin = {
  prefix: 'vv',
  regex: {
    code: /(vv)(\/{1}[0-9a-z-]+){1}/gm,
    lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  selector: (path) => `vv/${path[2].replace(/[_]+/g, '-')}`,
  path: './src/svg/*.svg',
};

module.exports = {
  content: ['./src/**/*.{astro,js,json,ts,tsx,html}'],
  plugin: [
    require('@iconsauce/material-icons'),
    require('@iconsauce/mdi-svg'),
    require('@iconsauce/mgg-icons'),
    customPlugin,
  ],
};
