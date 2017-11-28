const AppDispatcher = require('../Dispatcher/AppDispatcher');

const ListActions = {
    add: function (item) {
        AppDispatcher.dispatch({
            eventName: 'new-item',
            newItem: item
        });
    }
};

module.exports = ListActions;
