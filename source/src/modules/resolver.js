const R = require('ramda');

const resolverFactory = (container) => {
    const resolver = (function(_container){
        return function(resolutions, callback) {
            const resolution = []; 

            resolutions.forEach(function(dependency) {
                const resolvedDependency = _container.get(dependency);
                resolution.push(resolvedDependency);
            }, this);

            callback.apply(this, resolution);
        };
    })(container);

    const koaResolver = 
        ((resolver) => 
            (controller) => 
                async (ctx, next) =>  {
                    const curriedController = R.curry(controller.callback);
                    const final = curriedController(ctx, next);
    
                    resolver(
                        controller.dependencies, 
                        final
                    );
                }
        )(resolver);

    return koaResolver;
}

module.exports = exports = resolverFactory;