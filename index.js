// projDir string is the project directory with the package.json to be sorted
module.exports = function(projDir) {
  const fs = require('fs');

  function sortObj(obj) {
    var sorted = {};
    Object.keys(obj).sort().forEach(function(key) {
      sorted[key] = obj[key];
    })
    return sorted;
  }

  const pkgFile = projDir + '/package.json';
  let pkg = sortObj(JSON.parse(fs.readFileSync(pkgFile)));

  if (pkg.dependencies) {
    pkg.dependencies = sortObj(pkg.dependencies);
  }

  if (pkg.devDependencies) {
    pkg.devDependencies = sortObj(pkg.devDependencies);
  }

  let str = JSON.stringify(pkg, null, 2);
  fs.createWriteStream(pkgFile).end(str);
}
