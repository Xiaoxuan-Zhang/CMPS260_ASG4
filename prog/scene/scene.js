/**
 * Specifies a WebGL scene.
 *
 * @author "Your Name Here"
 * @this {Scene}
 */

class Scene {
  /**
   * Constructor for Scene.
   *
   * @constructor
   */
  constructor() {
    this.geometries = []; // Geometries being drawn on canvas
    //
    // YOUR CODE HERE
    //

    // Recommendations: Setting the canvas's clear color and clearing the canvas
    // here is a good idea.

    gl.clearColor(0.8, 0.8, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

  }

  init() {
    var image_src = 'external/textures/flcl.jpg';
    //initial cube
    create2DTexture(image_src, gl.LINEAR, gl.LINEAR, gl.REPEAT, gl.REPEAT, function(texture) {
      var geo = new MultiTextureCube(0.2, 0.5, 0.0);
      var material = {};
      material.texture = texture;
      geo.material(material);
      scene.addGeometry(geo);
    });
  }

  /**
   * Adds the given geometry to the the scene.
   *
   * @param {Geometry} geometry Geometry being added to scene
   */
  addGeometry(geometry) {
    //
    // YOUR CODE HERE
    //
    this.geometries.push(geometry);
  }

  /**
   * Clears all the geometry within the scene.
   */
  clearGeometry() {
    //
    // YOUR CODE HERE
    //

    // Recommendations: It would be best to call this.render() at the end of
    // this call.
    this.geometries = [];
    this.render();
  }

  /**
   * Updates the animation for each geometry in geometries.
   */
  updateAnimation() {
    //
    // YOUR CODE HERE
    //

    // Recomendations: No rendering should be done here. Your Geometry objects
    // in this.geometries should update their animations themselves through
    // their own .updateAnimation() methods.
    this.geometries.forEach(function(geometry){
      geometry.updateAnimation();
    })
  }

  /**
   * Renders all the Geometry within the scene.
   */
  render() {
    //
    // YOUR CODE HERE
    //

    // Recommendations: No calls to any of your GLSL functions should be made
    // here. Your Geometry objects in this.geometries should render themselves
    // through their own .render() methods.
    var start = performance.now();
    gl.clear(gl.COLOR_BUFFER_BIT);
    this.geometries.forEach(function(geometry){
      geometry.render();
    })
    var duration = performance.now() - start;
    sendTextToHTML(duration, 'drawing_time');
  }
}
