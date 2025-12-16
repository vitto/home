module.exports = {
  content: [
    './src/**/*.{js,json,ts,tsx,html}',
    './node_modules/@maggioli-design-system/**/*.{ts,tsx,js}',
  ],
  plugin: [
    require('@iconsauce/material-icons'),
    require('@iconsauce/mdi-svg'),
    require('@iconsauce/mgg-icons'),
  ],
};

