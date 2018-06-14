function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );


      var isovalue =128;
    var surfaces = Isosurfaces( volume, isovalue,screen );
    screen.scene.add( surfaces );

    
    // GUIパラメータ
 var guiCtrl = function(){
    this.isovalue = 128;
   // this.Camera_y = 0;
  //  this.Camera_z = 100;
  //  this.Message = '';
    //this.color = "#c2dc94";
  
    };

    window.onload = function(){
    lob = new guiCtrl();   
var gui = new dat.GUI();
    //gui.add( lob, 'isovalue', 0, 255 ).onChange(setValue);
    gui.add( lob, 'isovalue').onChange(setValue);
    function setValue()
    {
	isovalue = lob.isovalue;
       // screen.scene.remove( surfaces.material );
        screen.scene.remove( surfaces );
	surfaces = Isosurfaces( volume, isovalue,screen );

	screen.scene.add( surfaces );
    }
  
    }
    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });  
    screen.loop();
}
