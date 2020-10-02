Package.describe({
  name: 'aramk:semantic-ui',
  version: '2.4.1',
  summary: 'Semantic-UI',
  git: 'https://github.com/aramk/meteor-semantic-ui.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.6.1');
  api.use([
    'ecmascript',
    'jquery',
    'less'
  ], 'client');
  api.addFiles([
    'bin/semantic.min.js',
    'bin/semantic.min.css',
    // 'src/semantic.js',
    // 'src/semantic.less',
  ], 'client');
  api.addAssets([
    'bin/themes/default/assets/fonts/brand-icons.eot',
    'bin/themes/default/assets/fonts/brand-icons.svg',
    'bin/themes/default/assets/fonts/brand-icons.ttf',
    'bin/themes/default/assets/fonts/brand-icons.woff',
    'bin/themes/default/assets/fonts/brand-icons.woff2',
    'bin/themes/default/assets/fonts/icons.eot',
    'bin/themes/default/assets/fonts/icons.otf',
    'bin/themes/default/assets/fonts/icons.svg',
    'bin/themes/default/assets/fonts/icons.ttf',
    'bin/themes/default/assets/fonts/icons.woff',
    'bin/themes/default/assets/fonts/icons.woff2',
    'bin/themes/default/assets/fonts/outline-icons.eot',
    'bin/themes/default/assets/fonts/outline-icons.svg',
    'bin/themes/default/assets/fonts/outline-icons.ttf',
    'bin/themes/default/assets/fonts/outline-icons.woff',
    'bin/themes/default/assets/fonts/outline-icons.woff2',
    'bin/themes/default/assets/images/flags.png',
  ], 'client');
});