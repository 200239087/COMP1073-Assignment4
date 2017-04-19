var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    /**
     * The Icon class extends the createjs.Bitmap
     *
     * @export
     * @class Icon
     * @extends {createjs.Bitmap}
     */
    var Icon = (function (_super) {
        __extends(Icon, _super);
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
        function Icon(loader, _imageString, x, y, _isCentered) {
            var _this = 
            // send the result of the preload queue to the superclass constructor
            _super.call(this, loader.getResult(_imageString)) || this;
            _this._imageString = _imageString;
            _this._isCentered = _isCentered;
            // check to see if the user requires the icon's pivot to be centered
            if (_isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
            }
            // set the position of the icon
            _this.x = x;
            _this.y = y;
            // bind the mouseover and mouseout events
            _this.on("mouseover", _this._mouseOver);
            _this.on("mouseout", _this._mouseOut);
            return _this;
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
        Icon.prototype._mouseOver = function (event) {
            this.alpha = 0.7; // 70% opaque - 30% transparent
            this.scaleX = 1.2; // 120% of scale
            this.scaleY = 1.2;
        };
        /**
         * The mouseout event handler
         *
         * @private
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Icon
         */
        Icon.prototype._mouseOut = function (event) {
            this.alpha = 1.0; // 100% opaque -solid
            this.scaleX = 1.0; // 100% of scale - normal size
            this.scaleY = 1.0;
        };
        return Icon;
    }(createjs.Bitmap));
    objects.Icon = Icon;
})(objects || (objects = {}));
//# sourceMappingURL=icon.js.map