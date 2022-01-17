module.exports = class Runner {
  constructor() {
    this.status = 'stopped'
    this.prevFunction = undefined
  }

  /**
   * 
   * @param {Function} _function function to be executed, ex: arrow function and function
   * @returns any from this Runner
   */
  initialize(_function) {
    if (typeof _function !== 'function') throw new Error('Runner must be initialized with a function')
    
    this._function = _function
    
    return this
  }

  
  /**
   * 
   * @returns any from this Runner
   */
  run() {
    if (this.status !== 'stopped' &&  this._function === this.prevFunction) throw new Error('Runner is already running');
    
    this.#setStatus('running')
    
    this._function()

    this.#setStatus('stopped')
    this.prevFunction = this._function
    
    return this
  }


  /**
   * 
   * @returns any from this Runner
   */
  getStatus() {
    return this.status
  }

  
  /**
   * 
   * @returns any from this Runner
   */
  log() {
    console.log(this)

    return this
  }


  /**
   * 
   * @returns any from this Runner
   */
  reset() {
    this.status = 'stopped'
    this.prevFunction = undefined

    return this
  }


  /**
   * 
   * @param {String} status 
   * @returns any from this Runner
   */
   #setStatus(status) {
    this.status = status

    return this
  }
}