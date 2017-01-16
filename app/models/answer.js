import DS from 'ember-data';

export default DS.Model.extend({
  // question_id: DS.attr(),
  answer: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('rental', { async: true })
});
