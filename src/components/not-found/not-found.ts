import './not-found.scss';
import { Injectable, IControllerConstructor, IController } from 'angular';
/**
 *  Component Definition
 *
 * @export
 * @class NotFound
 * @implements {ng.IComponentOptions}
 */
export class NotFound implements ng.IComponentOptions {

  /**
   * Controller used with Component
   *
   * @type {Function}
   */
  public controller: Injectable<IControllerConstructor> = NotFoundController;

  /**
   * Template used with Component
   *
   * @type {string}
   */
  public template: string = require('./not-found.html').toString();

  /**
   * Object containing pairs Directive Bindings for Component
   *
   * @type {Object}
   */
  public bindings: { [binding: string]: string; } = {
    $router: '<'
  }
}

/**
 * notFound - Controller
 *
 * @export
 * @class NotFoundController
 */
export class NotFoundController implements IController {

  /**
   * $inject to make angular DI minifiication safe
   *
   * @static
   * @type {Array<string>}
   */
  public static $inject: [string] = ['$log', 'AngularServices', 'AppServices']

  /**
   * @param {*} $log Angular Log Service
   * @param {*} AngularServices Angular Services Convenience Service
   * @param {*} AppServices App Services Convenience Service
   */
  constructor(public $log: any, public AngularServices: any, public AppServices: any) {
    this.$log = $log.getInstance('NotFound', false)
    this.$log.debug('constructor')
  }

  /**
   * life cycle hook (road to ng2)
   */
  public $onInit(): void {
    this.$log.debug('onInit')
  }
}
