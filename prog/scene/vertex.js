/**
 * Specifies a vertex.
 *
 * @author "Your Name Here"
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z, uv = [], color = []) {
    this.points = new Vector3([x, y, z]); // May want to use a vector3 instead
    this.set_color(color);
    this.uv = uv;
    this.normal = new Vector3();
  }
  set_points(x, y, z) {
    this.points = new Vector3([x, y, z]);
  }
  set_texCoords(u, v) {
    this.uv = [u, v];
  }
  set_color(color) {
    if (color.length == 0)
    {
      this.color = [Math.random(), Math.random(), Math.random()];
    } else {
      this.color = color;
    }
  }
}
