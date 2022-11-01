import { Application, Geometry, Shader, Mesh } from 'pixi.js';

interface ITriangle extends Mesh<Shader> {
}

export class TriangleBuilder {
  triangle! : ITriangle;

  public create(cx : number, cy : number) : TriangleBuilder {
    const shader = Shader.from(`
      precision mediump float;
      attribute vec2 aVertexPosition;
      attribute vec3 aColor;
      
      uniform mat3 translationMatrix;
      uniform mat3 projectionMatrix;
      
      varying vec3 vColor;
      
      void main() {
        vColor = aColor;
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
      }`,
      `
      precision mediump float;
      varying vec3 vColor;

      void main() {
        gl_FragColor = vec4(vColor, 1.0);
      }
      `);

    const geometry = new Geometry()
      .addAttribute(
        'aVertexPosition',	// name of the attribute
        [-100, -50,					// x, y
          100, -50,					// x, y
          0.0, 100.0],			// x, y
        2)									// size of the attribute
      .addAttribute(
        'aColor',
        [0, 1, 0,
          0, 1, 0,
          0, 0, 1],
        3);

    this.triangle = new Mesh(geometry, shader);
    this.triangle.position.set(cx, cy);
    this.triangle.scale.set(2);

    return this;
  }

  public rotate(app : Application) : TriangleBuilder {
    app.ticker.add(() => {
      this.triangle.rotation += 0.01;
    });
    
    return this;
  }

  public add(app : Application) : void {
    app.stage.addChild(this.triangle);
  }
}


// Triangle primitive

// Application mapper

// Rotation operation
