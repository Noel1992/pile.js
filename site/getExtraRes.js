const glob = require('glob');
const fs = require('fs');
const uniq = require('lodash.uniq');

function getExtraRes() {
  const files = glob.sync('{./{components,docs}/**/*.md,./site/**/*.{less,css,js,jsx}}');
  const resources = files.reduce((acc, file) => {
    const content = fs.readFileSync(file, 'utf-8');
    if (content) {
      acc = acc.concat(content);
    }
    return acc;
  }, []);
  return uniq(resources);
}

module.exports = getExtraRes;
