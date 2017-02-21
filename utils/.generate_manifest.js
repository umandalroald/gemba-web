var manifest = require('../src/manifest.json'),
    // appTemplate = require('../src/app-template.html'),
    fileSystem = require('fs'),
    path = require('path');

// generates the manifest file using the package.json informations
manifest.description = process.env.npm_package_description;
manifest.version = process.env.npm_package_version;
manifest.chrome_url_overrides = {
  newtab: 'index.html'
};
// 'main.html';

fileSystem.writeFileSync(
  path.join(__dirname, '../build/manifest.json'),
  JSON.stringify(manifest)
);

// fileSystem.writeFileSync(
//   path.join(__dirname, '../build/index.html'),
//   appTemplate
// );
