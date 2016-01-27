import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-layout/footer', 'Integration | Component | app layout/footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{app-layout/footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#app-layout/footer}}
      template block text
    {{/app-layout/footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
