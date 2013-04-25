/*global Todos Ember */
'use strict';

Todos.Router.map(function () {
	this.resource('todos', { path: '/' }, function () {
		this.route('completed');
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function () {
		return Todos.Todo.find();
	}
});

Todos.TodosIndexRoute = Ember.Route.extend({
	setupController: function () {
		var todos = Todos.Todo.filter(function (todo) {
			if (!todo.get('isCompleted')) {
				return true;
			}
    });
    this.controllerFor('todos').set('sortProperties', null);
		this.controllerFor('todos').set('content', todos);

	}
});

Todos.TodosCompletedRoute = Ember.Route.extend({
	setupController: function () {
		var todos = Todos.Todo.filter(function (todo) {
			if (todo.get('isCompleted')) {
				return true;
			}
		});

    this.controllerFor('todos').set('sortProperties', ['title']);
		this.controllerFor('todos').set('content', todos);
	}
});
