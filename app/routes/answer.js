import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('answer');
    return this.store.findRecord('question', params.question_id);
  },
});
