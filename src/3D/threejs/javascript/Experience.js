let instance = null

export default class Experience{
    constructor(canvas) {
        if (instance){
            return instance
        }
        instance = this
        this.canvas = canvas
    }

}
