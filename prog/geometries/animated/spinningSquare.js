/**
 * Specifies a square which spins realtive to its center.
 *
 * @author "Your Name"
 * @this {SpinningSquare}
 */
class SpinningSquare extends Square {
  /**
   * Constructor for SpinningSquare.
   *
   * @constructor
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   * @returns {SpinningSquare} SpinningSquare object created
   */
  constructor(size, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, a square is going
    // to need a variable to keep track of its centerX and centerY position.

    super(size, 0.0, 0.0);
    this.x = centerX;
    this.y = centerY;
    this.angle = 0.0;
    this.offset = Math.round(60 * Math.random());
    this.now = performance.now();
  }

  /**
   * Updates the animation for spinning square. Rotates the square by spinAngle
   * relative to its center.
   */
  updateAnimation() {
    //
    // YOUR CODE HERE
    //

    // Recomendations: Do not simply apply a rotation matrix. Doing so will
    // cause your square to spin in a circle on screen.
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.

    var elapsed = performance.now() - this.now;
    this.now = performance.now();

    this.angle = this.angle + (this.offset * elapsed) / 1000.0;
    this.angle %= 360;
    this.modelMatrix.setTranslate(this.x, this.y, 0.0);
    this.modelMatrix.rotate(this.angle, 0, 0, 1);
  }
}
