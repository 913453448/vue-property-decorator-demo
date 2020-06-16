import {createDecorator} from "./component";

/**
 *  属性装饰器
 * @param options
 * @returns {(target: any, key: string) => any}
 * @constructor
 */
export function Prop(options: any) {
  if (options === void 0) {
    options = {};
  }
  return function (target: any, key: string) {
    //获取类组件的options属性，把当前属性的options赋给类组件options的props属性
    createDecorator(function (componentOptions: any, k: string) {
      (componentOptions.props || (componentOptions.props = {}))[k] = options;
    })(target, key);
  };
}