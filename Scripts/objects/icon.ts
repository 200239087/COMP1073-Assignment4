module objects {
  /**
   * The Icon class extends the createjs.Bitmap
   *
   * @export
   * @class Icon
   * @extends {createjs.Bitmap}
   */
  export class Icon extends createjs.Bitmap {

    // +++++++++++++++++ CONSTRUCTORS ++++++

    /**
     * Creates an instance of Icon.
     *
     * @param {string} _imageString
     * @param {number} _width
     * @param {number} _height
     * @param {number} x
     * @param {number} y
     * @param {boolean} _isCentered
     *
     * @memberOf Icon
     */
    constructor(
      loader: createjs.LoadQueue,
      private _imageString:string,
      x:number, y:number,
      private _isCentered: boolean) {
      // send the result of the preload queue to the superclass constructor
      super(loader.getResult(_imageString));

      // check to see if the user requires the icon's pivot to be centered
      if(_isCentered) {
        this.regX = this.getBounds().width * 0.5;
        this.regY = this.getBounds().height * 0.5;
      }

      // set the position of the icon
      this.x = x;
      this.y = y;

      // bind the mouseover and mouseout events
      this.on("mouseover", this._mouseOver);
      this.on("mouseout", this._mouseOut);
    }

    // +++++++++++++++ PRIVATE METHODS

    /**
     * The mouseover event handler
     *
     * @private
     * @param {createjs.MouseEvent} event
     *
     * @memberOf Icon
     */
    private _mouseOver(event:createjs.MouseEvent) {
      this.alpha = 0.7; // 70% opaque - 30% transparent
      this.scaleX = 1.2; // 120% of scale
      this.scaleY = 1.2;
    }

    /**
     * The mouseout event handler
     *
     * @private
     * @param {createjs.MouseEvent} event
     *
     * @memberOf Icon
     */
    private _mouseOut(event:createjs.MouseEvent) {
      this.alpha = 1.0; // 100% opaque -solid
      this.scaleX = 1.0; // 100% of scale - normal size
      this.scaleY = 1.0;
    }


  }
}
