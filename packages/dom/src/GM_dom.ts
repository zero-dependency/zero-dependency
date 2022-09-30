import { observe } from './observe.js'
import { waitObserve } from './waitObserve.js'

class GM_dom {
  observe: typeof observe
  waitObserve: typeof waitObserve

  constructor() {
    this.observe = observe
    this.waitObserve = waitObserve
  }
}

export default new GM_dom()
