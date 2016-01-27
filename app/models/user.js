import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  avatar: DS.attr('string'),
  company: DS.attr('string'),
  loggedIn: DS.attr('boolean'),
});
