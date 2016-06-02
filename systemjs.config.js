/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',

    // The core package is required as a peerDependency for other components.
    '@angular2-material/button': 'node_modules/@angular2-material/button/button',
    '@angular2-material/card': 'node_modules/@angular2-material/card/card',
    '@angular2-material/checkbox': 'node_modules/@angular2-material/checkbox/checkbox',
    '@angular2-material/core': 'node_modules/@angular2-material/core',
    '@angular2-material/icon': 'node_modules/@angular2-material/icon/icon',
    '@angular2-material/input': 'node_modules/@angular2-material/input/input',
    '@angular2-material/list': 'node_modules/@angular2-material/list/list',
    '@angular2-material/progress-circle': 'node_modules/@angular2-material/progress-circle/progress-circle',
    '@angular2-material/sidenav': 'node_modules/@angular2-material/sidenav/sidenav',
    '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar/toolbar'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {main: 'main.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'},
    'angular2-in-memory-web-api': {defaultExtension: 'js'}
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    defaultJSExtensions: true,
    map: map,
    packages: packages
  };

  System.config(config);

  System.import('app').catch(function(err){ console.error(err);  });
})(this);
