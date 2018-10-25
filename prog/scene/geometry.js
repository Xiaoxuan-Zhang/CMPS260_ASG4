/**
 * Specifies a geometric object.
 *
 * @author "Your Name Here"
 * @this {Geometry}
 */
class Geometry {
  /**
   * Constructor for Geometry.
   *
   * @constructor
   */
  constructor() {
    this.vertices = []; // Vertex objects. Each vertex has x-y-z.
    this.color = [];  // The color of your geometric object
    this.modelMatrix = new Matrix4(); // Model matrix applied to geometric object
    this.shader = null; // shading program you will be using to shade this geometry
    this.vertices_data = [];
    this.color_data = [];
    this.uv_data = [];
    this.texture = null;
    this.useTexture = false;
    this.useSolidColor = true;
  }

  material(materialObj) {
    if (materialObj.texture != undefined)
    {
      //texture
      this.shader = g_programs['texture'];
      this.texture = materialObj.texture;
      this.useTexture = true;
    } else if (materialObj.color != undefined){
      //solid color
      this.shader = g_programs['solid'];
      this.useSolidColor = true;
      this.color = materialObj.color;
    } else {
      //Rainbow
      this.shader = g_programs['rainbow'];
      this.useSolidColor = false;
    }
    //flat arrays
    for (var i = 0; i < this.vertices.length; i++)
    {
      for (var j = 0; j < this.vertices[i].points.elements.length; j++)
      {
        this.vertices_data = this.vertices_data.concat(this.vertices[i].points.elements[j]);
      }
      this.color_data = this.color_data.concat(this.vertices[i].color);
      if (this.useTexture && this.vertices[i].uv.length > 0)
      {
        this.uv_data = this.uv_data.concat(this.vertices[i].uv);
      }
    }
  }
  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
    //
    // YOUR CODE HERE
    //

    // Recommendations: sendUniformVec4ToGLSL(), tellGLSLToDrawCurrentBuffer(),
    // and sendAttributeBufferToGLSL() are going to be useful here.
    useShader(gl, this.shader);

    sendAttributeBufferToGLSL(new Float32Array(this.vertices_data), 3, "a_position");

    if (!this.useSolidColor)
    {
      sendAttributeBufferToGLSL(new Float32Array(this.color_data), 3, "a_color");
    } else {
      sendUniformVec4ToGLSL(new Float32Array(this.color), 'u_color');
    }

    if (this.useTexture)
    {
      sendAttributeBufferToGLSL(new Float32Array(this.uv_data), 2, "a_texCoord");
      send2DTextureToGLSL(this.texture, 0, 'u_sample');
    }

    sendUniformMatToGLSL(this.modelMatrix, "u_model");

    tellGLSLToDrawArrays(this.vertices.length);

  }

  /**
   * Responsible for updating the geometry's modelMatrix for animation.
   * Does nothing for non-animating geometry.
   */
  updateAnimation() {
    return;

    // NOTE: This is just in place so you'll be able to call updateAnimation()
    // on geometry that don't animate. No need to change anything.
  }

}
