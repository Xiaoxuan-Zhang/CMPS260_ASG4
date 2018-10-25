/**
 * Specifies a triangle which fluctuates in size (grows and shrinks).
 *
 * @author "Your Name"
 * @this {FluctuatingTriangle}
 */
class FluctuatingTriangle extends Triangle {
  /**
   * Constructor for FluctuatingTriangle.
   *
   * @constructor
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  constructor(size, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, to what amount your
    // triangle is currently scaled at.
    super(size, 0.0, 0.0);
    this.x = centerX;
    this.y = centerY;

  }

  /**
   * Updates the animation for FluctuatingTriangle. Grows and shrinks the
   * triangle in size.
   */
  updateAnimation() {
    //
    // YOUR CODE HERE
    //

    // Recomendations: How much the triangle grows an shrinks is up to you.
    // Might want to shrink it to x.50 at it's smallest point and x1.50 at it's
    // largest point.
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.

    this.now = performance.now();
    var scale_x = 0.5 + Math.abs(Math.sin(performance.now() * 0.001)) * 1.0
    var scale_y = 0.5 + Math.abs(Math.sin(performance.now() * 0.001)) * 1.0
    this.modelMatrix.setTranslate(this.x, this.y, 0.0) ;
    this.modelMatrix.scale(scale_x, scale_y, 0);

  }
}
