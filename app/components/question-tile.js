import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShowing: false,
  actions: {
    answerShow: function() {
      this.set('isAnswerShowing', true);
    },
    answerHide: function() {
      this.set('isAnswerShowing', false);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
