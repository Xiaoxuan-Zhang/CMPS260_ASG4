/**
 * Specifies a tilted cube which rotates.
 *
 * @author "Your Name"
 * @this {TiltedCube}
 */
class TiltedCube extends Cube {
  /**
   * Constructor for TiltedCube.
   *
   * @constructor
   * @returns {TiltedCube} Geometric object created
   */
  constructor(size, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recommendations: Might want to tilt your cube at 30 degrees relative to
    // the z-axis here. Pretty good tilt that lets us see that it's a cube.
    super(size, 0.0, 0.0);
    this.x = centerX;
    this.y = centerY;
    this.angle = Math.round(60 * Math.random());
    this.now = performance.now();
    this.modelMatrix.setTranslate(this.x, this.y, 0.0);
    this.modelMatrix.rotate(this.angle, 1, 1, 1);

  }

  /**
   * Updates the animation of the TiltedCube. Should make it rotate.
   */
  updateAnimation() {
    //
    // YOUR CODE HERE
    //

    // Recommendations: While your cube will only need to be at the origin, I'd
    // recommend coding it so it spins in place when placed anywhere on your
    // canvas. Why? Because you might need to have more than one spinning cube
    // in different positions on a future assignment ;)
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.

    var elapsed = performance.now() - this.now;
    this.now = performance.now();

    this.angle = this.angle + (20 * elapsed) / 1000.0;
    this.angle %= 360;
    this.modelMatrix.setTranslate(this.x, this.y, 0.0);
    this.modelMatrix.rotate(this.angle, 1, 1, 1);
  }
}
