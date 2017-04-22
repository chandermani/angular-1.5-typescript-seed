// vendor imports
import 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'LogUnobtrusiveExtension/dist/log-ex-unobtrusive';
import 'ng-stats';
import * as angular from 'angular';

// app css
import './app.scss';

// app imports
import Common from './common/common';
import Components from './components/components';

import {App} from './app';
import AppConfig from './app.config';

// top level angular module for app
angular.module('app', [
  'ngMaterial',
  'log.ex.uo',
  'angularStats',
  'ui.router',
  Common.name,
  Components.name,
])
.config(AppConfig)
.component('app', new App())

// start angular using code instead of ng-app declaration in the index.html
angular.bootstrap(document, ['app'], {
    strictDi: true
})
