import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['Avatar'],
  classNameBindings: ['avatarSizeClass'],
  avatarSizeClass: Ember.computed('size', function computeAvatarSize() {
    switch (this.get('size')) {
      case 'small': return 'Avatar--sm';
      case 'medium': return 'Avatar--md';
      case 'large': return 'Avatar--lg';
      default: return '';
    }
  }),
});
