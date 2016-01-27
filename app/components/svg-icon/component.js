import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['Icon'],
  classNameBindings: ['avatarSizeClass'],
  avatarSizeClass: Ember.computed('size', function computeAvatarSize() {
    switch (this.get('size')) {
      case 'small': return 'Icon--sm';
      case 'medium': return 'Icon--md';
      case 'large': return 'Icon--lg';
      default: return '';
    }
  }),
});
