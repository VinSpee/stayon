import Ember from 'ember';

export default Ember.Route.extend({
  async model() {
    return Ember.RSVP.hash({
      user: await this.store.queryRecord('current-user', {}),
    });
  },
});
