import Satellite from './satellite';

export default class ListSatellite extends Satellite {

  heightDidChange(dY) {
    this.radar._adjust(this, { dX: 0, dY });
  }

  next() {
    const nextComponent = this.component.next();

    return nextComponent ? nextComponent.satellite : null;
  }

  prev() {
    const prevComponent = this.component.prev();

    return prevComponent ? prevComponent.satellite : null;
  }

  static create(options) {
    return new ListSatellite(options);
  }

  destroy() {
    this._destroy();
  }
}
