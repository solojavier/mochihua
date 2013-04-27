/*global Todos Ember */
'use strict';

Todos.EditTodoView = Ember.TextField.extend({
	classNames: ['edit'],

	valueBinding: Ember.Binding.oneWay('todo.title'),

	focusOut: function () {
    this.set('todo.title', this.get('value'));
		this.set('controller.isEditing', false);
	},

	insertNewline: function () {
		this.set('controller.isEditing', false);
	},

	didInsertElement: function () {
		this.$().focus();
	}
});
