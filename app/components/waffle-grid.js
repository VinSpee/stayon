import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: [
    'Grid',
    'Grid--fit',
    'Grid--alignMiddle',
    'Grid--alignCenter',
  ],
  attributeBindings: ['style'],
  style: Ember.computed('stretch', function computeStretchedSize() {
    if (this.get('stretch')) {
      return 'height: 100%;';
    }
    return null;
  }),
  spacing: Ember.computed('space', function computeSpaceSize() {
    switch (this.get('space')) {
      case 'comfy': return 'blank-u-mgAmd';
      case 'cozy': return 'blank-u-mgAsm';
      case 'compact': return 'blank-u-mgAbb';
      default: return '';
    }
  }),
});
