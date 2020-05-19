const webpack = require('webpack');

module.exports = {
  externals: {
    rxjs: 'rxjs',
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/common/http': 'ng.common.http',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    '@angular/compiler': 'ng.compiler',
    // '@angular/cdk': 'ng.cdk',
    // 'ng-zorro-antd/select': "['ng-zorro-antd'].select",
    // 'ng-zorro-antd/empty': "['ng-zorro-antd'].empty",
    // "@angular/elements": "ng.elements",

    // Uncomment and add to scripts in angular.json if needed
    // "@angular/router": "ng.router",
    // "@angular/forms": "ng.forms"
  },
};
