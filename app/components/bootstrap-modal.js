import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['modal fade'],

	closeBtnText: 'Cancel',
	sendBtnText: 'Send',

	actions: {
		send: function() {
			this.sendAction();
		},

		close: function() {
			this.set('sending', false);
		}
	}
});