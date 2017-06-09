var AppDispatcher = require('../Dispatcher/AppDispatcher');
import {EventEmitter} from 'events';

var ListStore = assign({}, EventEmitter.prototype, {
    items: [],

    getAll: function () {
        return this.items;
    },

    emitChange: function () {
        this.emit('change');
    },

    dispatcherIndex: AppDispatcher.register(function (action) {
        switch (action.eventName) {

            case 'new-item':

                // We get to mutate data!
                ListStore.items.push(action.newItem);
                ListStore.emitChange();
                break;
        }

        return true;
    })
});

module.exports = ListStore;
