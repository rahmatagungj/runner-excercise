module.exports = class Runner {
  constructor() {
    this.status = 'stopped'
    this.prevFuntion = undefined
  }

  /**
   * 
   * @param {Function} _function function to be executed, ex: arrow function and function
   * @returns any from this Runner
   */
  initialize (_function) {
    this._function = _function

    return this
  }

  
  /**
   * 
   * @returns any from this Runner
   */
  run() {
    if (this.status === 'stopped' && this._function !== this.prevFuntion) {
      this.#setStatus('running')

      if (typeof this._function === 'function') {
        this._function()
      } else {
        this._function
      }

      this.#setStatus('stopped')
      this.prevFuntion = this._function
    } else {
      throw new Error('Runner is already running')
    }
    
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
    this.prevFuntion = undefined

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