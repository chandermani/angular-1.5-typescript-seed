import * as angular from 'angular';
AppConfig.$inject = ['$locationProvider', 'logExProvider', '$compileProvider', '$mdIconProvider', '$stateProvider', '$urlRouterProvider'];

/**
 * Config function for Angular on the main App component
 *
 * @export
 * @param {*} $locationProvider Angular Location Provider
 * @param {*} logExProvider Angular Log Extender
 * @param {*} $compileProvider Angular Compiler Provider
 * @param {*} $mdIconProvider Angular Material Icon Provider
 */
export default function AppConfig($locationProvider: any, logExProvider: any, $compileProvider: any, $mdIconProvider: any, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {

  buildStates().forEach(s => {
    $stateProvider.state(s);
  });

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/home');

  // determine environment
  let isDevEnvironment: boolean = false
  if (window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('127.0.0.1') >= 1) {
    isDevEnvironment = true
  }

  // debug and logging config
  logExProvider.enableLogging(true, false)
  logExProvider.useDefaultLogPrefix(false)
  logExProvider.overrideLogPrefix(function (className: string): string {
    let $injector: any = angular.injector(['ng'])
    let $filter: any = $injector.get('$filter')
    let separator: any = '::'
    let format: any = 'h:mm:ss'
    let now: any = $filter('date')(new Date(), format)
    return '' + now + (!angular.isString(className) ? '' : ' ' + className) + separator
  })

  // disable angular debug info if app is not running locally. This increases performance in production
  if (isDevEnvironment) {
    $compileProvider.debugInfoEnabled(true)
  } else {
    $compileProvider.debugInfoEnabled(false)
  }

  // enable browser back button
  $locationProvider.html5Mode(false)

  // set angualr material icon font set
  $mdIconProvider.defaultFontSet('Material Icons')
}

function buildStates(): Array<ng.ui.IState> {
  return [
    {
      name: 'hello',
      url: '/hello',
      template: '<home></home>'
    },
    {
      name: 'thingid',
      url: '/thing/{id}',
      template: '<thing></thing>'
    },
    {
      name: 'notFound',
      url: '/notfound',
      template: '<not></thing>'
    }
  ];
}