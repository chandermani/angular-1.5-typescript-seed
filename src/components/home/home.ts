import './home.scss';
import { Injectable, IControllerConstructor, IController } from 'angular';
/**
 *  Component Definition
 *
 * @export
 * @class home
 * @implements {ng.IComponentOptions}
 */
export class Home implements ng.IComponentOptions {

  /**
   * Controller used with Component
   *
   * @type {Function}
   */
  public controller: Injectable<IControllerConstructor> = HomeController;

  /**
   * Template used with Component
   *
   * @type {string}
   */
  public template: string = require('./home.html').toString();

  /**
   * Object containing pairs Directive Bindings for Component
   *
   * @type {Object}
   */
  public bindings: { [binding: string]: string; } = {
    $router: '<'
  };

  /**
   * Component Router lifecycle hook
   */
  public $canActivate: any = function(): boolean {
    return true
  };

}

/**
 * home - Controller
 *
 * @export
 * @class HomeController
 */
export class HomeController implements IController {

  /**
   * $inject to make angular DI minifiication safe
   *
   * @static
   * @type {Array<string>}
   */
  public static $inject: [string] = ['$log', 'AngularServices', 'AppServices'];

  /**
   * @param {*} $log Angular Log Service
   * @param {*} AngularServices Angular Services Convenience Service
   * @param {*} AppServices App Services Convenience Service
   */
  constructor(public $log: any, public AngularServices: any, public AppServices: any) {
    this.$log = $log.getInstance('Home', false);
    this.$log.debug('constructor');
  }

  /**
   * life cycle hook (road to ng2)
   */
  public $onInit(): void {
    this.$log.debug('onInit');
  }
}
