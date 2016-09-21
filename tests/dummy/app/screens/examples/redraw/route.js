import Ember from 'ember';
import { getDynamicImages } from 'dummy/lib/get-images';

const {
  Route
  } = Ember;

export default Route.extend({

  model() {
    const items = Ember.A([]);
    for (let i = 0; i < 100; i++) {
      items.pushObject(Ember.Object.create({
        name: `item ${i}`,
        height:`${20 + ((i % 5) * 10)}px`
      }));
    }
    return items;
  }

});
