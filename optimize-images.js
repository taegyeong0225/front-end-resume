const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['src/assets/*.png'], {
  destination: 'dist/assets',
  plugins: [imageminWebp({ quality: 85 })],
}).then(() => {
  console.log('이미지 최적화 완료!');
});
