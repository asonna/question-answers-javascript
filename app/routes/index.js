import Ember from 'ember';

// var questions = [{
//   id: 1,
//   question: "What does the Router do with the information from the URL?",
//   author: "Billy Jones",
//   notes: "Javascript",
//   answers:"Placeholder for answer page1"
// }, {
//   id: 2,
//   question: "What is the Route Handler responsible for? What triggers it into action, and what action does it then perform?",
//   author: "Ray Hamilton",
//   notes: "Ember/Javascript",
//   answers:"Placeholder for answer page2"
// }, {
//   id: 3,
//   question: "What portion of the application is responsible for accessing the model? When and where does this occur?",
//   author: "Anne Moretti",
//   notes: "Javascript",
//   answers:"Placeholder for answer page3"
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
});
