(function () { // IIFE - Immediately Invoked Function Expression

  let canvas: HTMLElement;
  let canvasWidth: number;
  let canvasHeight: number;
  let canvasHalfWidth: number;
  let canvasHalfHeight: number;
  let stage: createjs.Stage;
  let seeMore: objects.Label;
  let treesharksLogo: objects.Icon;
  let appStarted:boolean;
  let loader:createjs.LoadQueue;

  /**
   * This method Preloads all the image files for the app
   *
   * @method Init
   * @returns void
   */
  function Init():void {
    loader = new createjs.LoadQueue();
    loader.on("complete", Start);
    loader.loadManifest([
      {id: "treesharksLogo", src:"../../Assets/Images/TSIcon.svg"}
    ])
  }

  /**
   * This method initializes the createjs Stage object and
   * starts the Game Loop
   *
   * @method Start
   * @returns void
   */
  function Start(): void {
    appStarted = false;

    canvas = document.getElementById("canvas");

    OnResize();

    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    stage.enableMouseOver(20);

    Aside();
  }

  /**
   * the aside app ("Game") loop - gets called every frame (approx every 16 ms)
   *
   * @method Update
   * @returns void
   */
  function Update(event: createjs.Event): void {

    seeMore.x = seeMore.x + 2;
    if (seeMore.x > 300) {seeMore.x = -300;}

    stage.update();
  }

  /**
   * This method is where all the fun happens - we add child objects to the stage here
   *
   * @method Main
   * @returns void
   */
  function Aside(): void {
    appStarted = true;

    seeMore = new objects.Label("Click me to see more of my work", "32px", "Times New Roman", "#000000",
    canvasHalfWidth, canvasHalfHeight + 200, true);
    stage.addChild(seeMore);


    treesharksLogo = new objects.Icon(loader, "treesharksLogo",
    canvasHalfWidth, canvasHalfHeight - 100, true);
    stage.addChild(treesharksLogo);
  }

   /**
    * This menthod responds to the resizing of the window object
    * @method OnResize
    * @returns void
    */
  function OnResize():void {
    canvasWidth = window.innerWidth * 0.64;
    canvasHeight = window.innerHeight * 0.96;
    canvasHalfWidth = canvasWidth * 0.5;
    canvasHalfHeight = canvasHeight * 0.5;

    canvas.setAttribute("width", canvasWidth.toString());
    canvas.setAttribute("height", canvasHeight.toString());

    if(appStarted) {
      seeMore.x = canvasHalfWidth;
      seeMore.y = canvasHalfHeight;
      treesharksLogo.x = canvasHalfWidth;
      treesharksLogo.y = canvasHalfHeight - 100;
    }

  } 

  window.onload = Init;

  window.onresize = OnResize;

})();
