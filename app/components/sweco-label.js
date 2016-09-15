import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'label',
	attributeBindings: ['for'],
	classNames: 'control-label',

	for: Ember.computed.alias('inputId'),

	click: function() {
		this.sendAction();
	}
});