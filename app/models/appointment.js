import DS from 'ember-data';

export default DS.Model.extend({
  client: DS.belongsTo('client'),
  type: DS.attr('string'),
  datetime: DS.attr('date'),
  payment: DS.belongsTo('payment'),
});
