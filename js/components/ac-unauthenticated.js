define(['knockout', 'text!./ac-unauthenticated.html', 'services/AuthAPI'], function (ko, view, authAPI) {
    function unauthenticated(params) {
        var self = this;
        self.signInOpened = authAPI.signInOpened;
    }

    var component = {
        viewModel: unauthenticated,
        template: view
    };

    ko.components.register('unauthenticated', component);
    return component;
});
