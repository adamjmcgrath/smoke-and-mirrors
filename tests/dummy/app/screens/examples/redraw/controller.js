import Ember from 'ember';
import { getDynamicImages } from 'dummy/lib/get-images';

const {
  Controller
  } = Ember;

export default Controller.extend({

  show: true,

  _generateData({ size=50, from=0 }) {
    const data = Ember.A();
    const end = from + size;

    for (let i = from; i < end; i++) {
      data.pushObject(Ember.Object.create({
        name: `item ${i}`,
        height:`${20 + ((i % 5) * 10)}px`
      }));
    }

    return data;
  },

  actions: {
    lastReached() {
      const newData = this._generateData({ from: this.get('model.length') });
      this.get('model').pushObjects(newData);
    },
    redraw() {
      Ember.run(() => this.set('show', false));
      this.set('show', true);
    },
    resetModel() {
      this.set('model', this._generateData({ size: 100 }));
    }
  }

});
