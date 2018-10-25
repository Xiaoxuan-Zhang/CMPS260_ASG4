/**
 * Function called when the webpage loads.
 */
 var canvas;
 var gl, g_objects = [],g_colors = [];
 var scene;
 var g_programs = {};
function main() {
  //
  // YOUR CODE HERE
  //
  canvas = document.getElementById('myWebGL');
  if (!canvas)
  {
    console.log('Fail to retrieve canvas element');
    return false;
  }

  gl = getWebGLContext(canvas);
  if (!gl)
  {
    console.log('Failed to get the webgl context');
    return;
  }
  gl.enable(gl.DEPTH_TEST);
  /*Create programs*/
  var program0 = createShader(gl, ASSIGN4_VSHADER0, ASSIGN4_FSHADER0);
  if (!program0)
  {
    console.log('Failed to create shaders');
    return;
  }
  g_programs['rainbow'] = program0;

  var program1 = createShader(gl, ASSIGN4_VSHADER1, ASSIGN4_FSHADER1);
  if (!program1)
  {
    console.log('Failed to create shaders');
    return;
  }
  g_programs['solid'] = program1;
  var program2 = createShader(gl, ASSIGN4_VSHADER2, ASSIGN4_FSHADER2);
  if (!program2)
  {
    console.log('Failed to create shaders');
    return;
  }
  g_programs['texture'] = program2;
  scene = new Scene();
  scene.init();

  //Register events
  initEventHandelers(canvas);

  tick();
}
