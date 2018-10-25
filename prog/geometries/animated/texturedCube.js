/**
 * A cube with a single textured applied in multiple different ways. A subclass
 * of TiltedCube.
 *
 * @author "Your Name Here"
 * @this {MultiTextureCube}
 */
class MultiTextureCube extends TiltedCube {
  /**
   * Constructor for MultiTextureCube
   *
   * @constructor
   * @param {String} texturePath The filepath/URL of the image used as a texture
   */
  constructor(size, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recomendations: Might want to call generateUVCoordinates here.
    super(size, centerX, centerY);
    this.generateUVCoordinates();
  }

  /**
   * Generates the texture coordinates of CheckerCube.
   *
   * @private
   */
  generateUVCoordinates() {

    // Recomendations: Remember uv coordinates are defined from 0.0 to 1.0.
    /*
      4- - -5
     /|    /|
    0- - -1 |
    | |   | |
    | 7- -|-6
    |/    |/
    3- - -2
  */
    //front full image
    this.vertices[0].set_texCoords(0.0, 1.0) ; //0
    this.vertices[1].set_texCoords(1.0, 1.0) ; //1
    this.vertices[2].set_texCoords(1.0, 0.0) ; //2

    this.vertices[3].set_texCoords(0.0, 1.0) ; //0
    this.vertices[4].set_texCoords(1.0, 0.0) ; //2
    this.vertices[5].set_texCoords(0.0, 0.0) ; //3

    //left top half
    this.vertices[6].set_texCoords(1.0, 1.0) ; //0
    this.vertices[7].set_texCoords(1.0, 0.5) ; //3
    this.vertices[8].set_texCoords(0.0, 0.5) ; //7

    this.vertices[9].set_texCoords(1.0, 1.0) ; //0
    this.vertices[10].set_texCoords(0.0, 0.5) ; //7
    this.vertices[11].set_texCoords(0.0, 1.0) ; //4

    //right bottom half
    this.vertices[12].set_texCoords(0.0, 0.5) ; //1
    this.vertices[13].set_texCoords(1.0, 0.5) ; //5
    this.vertices[14].set_texCoords(1.0, 0.0) ; //6

    this.vertices[15].set_texCoords(0.0, 0.5) ; //1
    this.vertices[16].set_texCoords(1.0, 0.0) ; //6
    this.vertices[17].set_texCoords(0.0, 0.0) ; //2

    //top twice
    this.vertices[18].set_texCoords(0.0, 0.0) ; //0
    this.vertices[19].set_texCoords(1.0, 0.0) ; //4
    this.vertices[20].set_texCoords(2.0, 1.0) ; //5

    this.vertices[21].set_texCoords(0.0, 0.0) ; //0
    this.vertices[22].set_texCoords(2.0, 1.0) ; //5
    this.vertices[23].set_texCoords(2.0, 0.0) ; //1

    //bottom 3x3
    this.vertices[24].set_texCoords(0.0, 3.0) ; //3
    this.vertices[25].set_texCoords(0.0, 0.0) ; //7
    this.vertices[26].set_texCoords(3.0, 0.0) ; //6

    this.vertices[27].set_texCoords(0.0, 3.0) ; //3
    this.vertices[28].set_texCoords(3.0, 0.0) ; //6
    this.vertices[29].set_texCoords(3.0, 3.0) ; //2

    //back
    this.vertices[30].set_texCoords(1.0, 1.0) ; //4
    this.vertices[31].set_texCoords(0.0, 1.0) ; //5
    this.vertices[32].set_texCoords(0.0, 0.0) ; //6

    this.vertices[33].set_texCoords(1.0, 1.0) ; //4
    this.vertices[34].set_texCoords(0.0, 0.0) ; //6
    this.vertices[35].set_texCoords(1.0, 0.0) ; //7

  }

  /**
   * Renders MultiTextureCube.
   */
  render() {
    //
    // YOUR NAME HERE
    //

    // Recomendations: This will be the first time render will need to be
    // overloaded. Why? Because this is a textured geometry, not a geometry
    // which relies on a color value. Might want to use
    // Recommendations: sendUniformVec4ToGLSL(), tellGLSLToDrawCurrentBuffer(),
    // and sendAttributeBufferToGLSL() are going to be useful here.
    useShader(gl, g_programs['texture']);

    sendAttributeBufferToGLSL(new Float32Array(this.vertices_data), 3, "a_position");
    sendAttributeBufferToGLSL(new Float32Array(this.uv_data), 2, "a_texCoord");
    send2DTextureToGLSL(this.texture, 0, 'u_sample');
    sendUniformMatToGLSL(this.modelMatrix, "u_model");

    tellGLSLToDrawArrays(this.vertices.length);
  }

}
