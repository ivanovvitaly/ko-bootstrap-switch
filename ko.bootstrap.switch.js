ko.bindingHandlers.bsSwitch = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        $(element).on('switchChange.bootstrapSwitch', function (e, state) {
            var value = valueAccessor();
            value(state);
        });

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).bootstrapSwitch("destroy");
        });

        ko.bindingHandlers.checked.init(element, valueAccessor);
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var currentValue = ko.unwrap(valueAccessor());
        $(element).bootstrapSwitch('state', currentValue, true);
    }
};