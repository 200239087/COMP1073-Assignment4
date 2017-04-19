// IIFE - Immediately Invoked Function Expression
(function () {
    // Function Level Variables
    var canvas;
    var canvasWidth;
    var canvasHeight;
    var canvasHalfWidth;
    var canvasHalfHeight;
    var stage;
    var seeMore;
    var treesharksLogo;
    var appStarted;
    var loader;
    /**
     * This method Preloads all the image files for the app
     *
     * @method Init
     * @returns void
     */
    function Init() {
        loader = new createjs.LoadQueue(); // load container
        loader.on("complete", Start); // call start when finished loading
        loader.loadManifest([
            { id: "treesharksLogo", src: "../../Assets/images/TSIcon.svg" }
        ]);
    }
    /**
     * This method initializes the createjs Stage object and
     * starts the Game Loop
     *
     * @method Start
     * @returns void
     */
    function Start() {
        appStarted = false; // app hasn't started yet
        // gets a reference ("hook") into the canvas element
        canvas = document.getElementById("canvas");
        OnResize(); // sets the size of the canvas
        // creates a new stage container - parent container for our app
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // set framerate to 60 FPS
        createjs.Ticker.on("tick", Update); // call the Update method every frame
        stage.enableMouseOver(20); // enables our mouseover and mouseout events
        Aside(); // call the aside function
    }
    /**
     * the aside app ("Game") loop - gets called every frame (approx every 16 ms)
     *
     * @method Update
     * @returns void
     */
    function Update(event) {
        seeMore.x = seeMore.x + 2;
        if (seeMore.x > 500) {
            seeMore.x = -300;
        }
        stage.update(); // redraw the stage
    }
    /**
     * This method is where all the fun happens - we add child objects to the stage here
     *
     * @method Main
     * @returns void
     */
    function Aside() {
        appStarted = true;
        // all objects added to the stage appear in "layer order"
        // add a helloLabel to the stage
        seeMore = new objects.Label("Click me to see more of my work", "32px", "Times New Roman", "#000000", canvasHalfWidth, canvasHalfHeight + 200, true);
        stage.addChild(seeMore);
        // add a clickMeButton to the stage
        treesharksLogo = new objects.Icon(loader, "treesharksLogo", canvasHalfWidth, canvasHalfHeight - 100, true);
        stage.addChild(treesharksLogo);
    }
    /**
     * This menthod responds to the resizing of the window object
     * @method OnResize
     * @returns void
     */
    function OnResize() {
        canvasWidth = stage.canvas.width;
        canvasHeight = canvas.scrollHeight;
        canvasHalfWidth = canvasWidth * 0.5;
        canvasHalfHeight = canvasHeight * 0.5;
        canvas.setAttribute("width", canvasWidth.toString());
        canvas.setAttribute("height", canvasHeight.toString());
        // check if app started then re-align the labels and buttons
        if (appStarted) {
            seeMore.x = canvasHalfWidth;
            seeMore.y = canvasHalfHeight + 200;
            treesharksLogo.x = canvasHalfWidth;
            treesharksLogo.y = canvasHalfHeight - 100;
        }
    }
    // window binding events
    window.onload = Init;
    window.onresize = OnResize;
})();
//# sourceMappingURL=app.js.map