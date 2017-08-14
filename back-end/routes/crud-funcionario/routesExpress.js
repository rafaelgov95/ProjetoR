'use stritc'
module.exports = function(Routes, router) {
    Routes.forEach(function(route, index) {
        router[route.method](route.path, route.action)
    });
    return router;
}