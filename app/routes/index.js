import Ember from 'ember';

var questions = [{
  id: 1,
  question: "What does the Router do with the information from the URL?",
  author: "Billy Jones",
  Additional notes: "Ember in Javascript"
}, {
  id: 2,
  question: "What is the Route Handler responsible for? What 'triggers' it into action, and what action does it then perform?",
  author: "Ray Hamilton",
  Additional notes: "Ember in Javascript"
}, {
  id: 3,
  question: "What portion of the application is responsible for accessing the model? When and where does this occur?",
  author: "Anne Moretti",
  Additional notes: "Ember in Javascript"
  // answers:
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
