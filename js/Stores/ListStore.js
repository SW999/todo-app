const AppDispatcher = require('../Dispatcher/AppDispatcher');
import {EventEmitter} from 'events';
const assign = require('object-assign');

const ListStore = assign({}, EventEmitter.prototype, {
    items: [],

    getAll: function () {
        return this.items;
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },

    dispatcherIndex: AppDispatcher.register(function (action) {
        switch (action.eventName) {

            case 'new-item':
                ListStore.items.push(action.newItem);
                ListStore.emitChange();
                break;
        }

        return true;
    })
});

module.exports = ListStore;
