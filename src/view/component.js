import Vue from "vue";

export const $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured', // 2.5
    'serverPrefetch' // 2.6
];

function collectDataFromConstructor(vm, Component) {
    //创建一个组件实例
    const data = new Component();
    const plainData = {};
    //遍历当前对象的属性值
    Object.keys(data).forEach(key => {
        if (data[key] !== void 0) {
            plainData[key] = data[key];
        }
    });
    //返回属性值
    return plainData
}

/**
 * 组件工程函数
 * @param Component //当前类组件
 * @param options //参数
 */
function componentFactory(Component, options = {}) {
    options.name = options.name || Component.name; //如果options没有name属性的话就直接使用类名
    //获取类的原型
    const proto = Component.prototype;
    //遍历原型上面的属性
    Object.getOwnPropertyNames(proto).forEach((key) => {
        // 过滤构造方法
        if (key === 'constructor') {
            return
        }
        // 赋值vue自带的一些方法
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return
        }
        //获取属性描述器
        const descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            //如果是方法的话直接赋值给methods属性
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            } else {
                //不是方法属性的话就通过mixins方式直接赋值给data
                (options.mixins || (options.mixins = [])).push({
                    data() {
                        return {[key]: descriptor.value}
                    }
                });
            }
        } else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            }
        }
    });
    //通过类实例获取类属性值通过mixins给data
    (options.mixins || (options.mixins = [])).push({
        data() {
            return collectDataFromConstructor(this, Component)
        }
    });
    // decorate options
    const decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(fn => fn(options));
        delete Component.__decorators__
    }

    //获取当前类的父类
    const superProto = Object.getPrototypeOf(Component.prototype);
    //获取Vue
    const Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    //使用Vue.extend方法创建一个vue组件
    const Extended = Super.extend(options);
    //直接返回一个Vue组件
    return Extended
}

/**
 * 组件装饰器
 * @param options 参数
 * @returns {Function} 返回一个vue组件
 */
export default function Component(options) {
    //判断有没有参数
    if (typeof options === 'function') {
        return componentFactory(options)
    }
    return function (Component) {
        return componentFactory(Component, options)
    }
}

export function createDecorator(factory, key, index) {
    return (target, key, index) => {
        const Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = []
        }
        if (typeof index !== 'number') {
            index = undefined
        }
        Ctor.__decorators__.push(options => factory(options, key, index))
    }
}