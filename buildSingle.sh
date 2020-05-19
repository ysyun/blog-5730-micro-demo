#!/bin/sh
ng build monitor --prod --extra-webpack-config=apps/monitor/webpack.externals.js --output-hashing=none --single-bundle true && cat dist/apps/monitor/main-es5.js dist/apps/monitor/polyfill-es5.js > apps/app-container/src/assets/monitor-es5.js
cat dist/apps/monitor/scripts.js > apps/app-container/src/assets/scripts.js
