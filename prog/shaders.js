var ASSIGN4_VSHADER0 =
  `
    precision mediump float;
    uniform mat4 u_model;
    attribute vec4 a_position;
    attribute vec4 a_color;
    varying vec4 v_color;
    void main(){
      gl_Position = u_model * a_position;
      v_color = a_color;
    }
  `;

var ASSIGN4_FSHADER0 =
  `
  precision mediump float;
  varying vec4 v_color;
  void main(){
    gl_FragColor = v_color;
  }
  `;
var ASSIGN4_VSHADER1 =
  `
    precision mediump float;
    uniform mat4 u_model;
    attribute vec4 a_position;

    void main(){
      gl_Position = u_model * a_position;
    }
  `;

var ASSIGN4_FSHADER1 =
  `
  precision mediump float;
  uniform vec4 u_color;
  void main(){
    gl_FragColor = vec4(u_color.rgb, 1.0);
  }
  `;

var ASSIGN4_VSHADER2 =
  `
    precision mediump float;
    uniform mat4 u_model;
    attribute vec4 a_position;
    attribute vec2 a_texCoord;
    varying vec2 v_texCoord;
    void main(){
      gl_Position = u_model * a_position;
      v_texCoord = a_texCoord;
    }
  `;

var ASSIGN4_FSHADER2 =
  `
  precision mediump float;
  uniform vec4 u_color;
  uniform sampler2D u_sample;
  varying vec2 v_texCoord;
  void main(){
    gl_FragColor = texture2D(u_sample, v_texCoord);
  }
  `;
