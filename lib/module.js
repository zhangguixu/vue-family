(function(global) {
    const modules = new Map();
    
    global.require = function(moduleName) {
        return modules.get(moduleName) || {};
    }

    global.define = function(moduleName, factory) {
        if (modules.get(moduleName)) {
            return;
        }
        modules.set(moduleName, factory.call());
    }

})(window)