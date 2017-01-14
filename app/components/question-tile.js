import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShowing: false,
  actions: {
    answerShow: function() {
      this.set('isAnswerShowing', true);
    },
    answerHide: function() {
      this.set('isAnswerShowing', false);
    }
  }
});
