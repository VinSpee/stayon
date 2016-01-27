import DS from 'ember-data';

export default DS.Model.extend({
  appointment: DS.belongsTo('appointment'),
  paid: DS.attr('boolean', { defaultValue: false }),
  amount: DS.attr('number'),
  method: DS.attr('string'),
  tip: DS.attr('number'),
});
