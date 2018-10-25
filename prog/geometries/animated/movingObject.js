/**
 * Specifies a triangle which fluctuates in size (grows and shrinks).
 *
 * @author "Your Name"
 * @this {FluctuatingTriangle}
 */
class MovingObject extends Geometry {
  /**
   * Constructor for FluctuatingTriangle.
   *
   * @constructor
   * @param {Number} object imported mesh
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  constructor(object, size, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, to what amount your
    // triangle is currently scaled at.
    super();
    this.x = centerX;
    this.y = centerY;
    this.scale = size;
    this.vertices = object.vertices;

    this.angle = 0.0;
    this.now = performance.now();
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
    var elapsed = performance.now() - this.now;
    this.now = performance.now();
    this.angle += (10 * elapsed) / 1000.0;
    this.angle %= 360;
    this.modelMatrix.setTranslate(this.x, this.y, 0.0);
    this.modelMatrix.scale(this.scale, this.scale, this.scale);
    this.modelMatrix.rotate(this.angle, 0, 1, 1);

  }
}
