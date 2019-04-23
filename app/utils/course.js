import EmberObject from '@ember/object';

const Course = EmberObject.extend({
  title: 'No Title',
  description: '',

  init() {
    this._super(...arguments);
    this.set('tags', []);
    this.set('languages', []);
  },
});

Course.reopenClass({
  languageNames: {
    'js':  'JavaScript',
  },
  languageName(abbrev) {
    return this.languageNames[abbrev] || 'Unknown'
  }
})

export default Course;
