import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-nav/nav-item', 'Integration | Component | app nav/nav item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{app-nav/nav-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#app-nav/nav-item}}
      template block text
    {{/app-nav/nav-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
