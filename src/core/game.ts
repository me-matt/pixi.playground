import { Application, DisplayObject } from 'pixi.js';

export class Game {
  private static app: Application;
  private static currentScene: IScene;

  private static _width: number;
  public static get width(): number {
    return Game._width;
  }
  private static set width(value: number) {
    this._width = value;
  }

  private static _height: number;
  public static get height(): number {
    return Game._height;
  }
  private static set height(value: number) {
    this._height = value;
  }

  public static initialize(width: number, height: number, background: number, target: HTMLCanvasElement): void {
    Game.width = width;
    Game.height = height;

    Game.app = new Application({
      view: target,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: background,
      width: width,
      height: height,
    });

    Game.app.ticker.add(Game.update);
  }

  public static changeScene(newScene: IScene): void {
    if (Game.currentScene) {
      Game.app.stage.removeChild(Game.currentScene);
      Game.currentScene.destroy();
    }

    Game.currentScene = newScene;
    Game.app.stage.addChild(Game.currentScene);
  }

  private static update(framesPassed: number): void {
    if (Game.currentScene) {
      Game.currentScene.update(framesPassed);
    }

    // as I said before, I HATE the "frame passed" approach. I would rather use `Manager.app.ticker.deltaMS`
  }
}

// This could have a lot more generic functions that you force all your scenes to have. Update is just an example.
// Also, this could be in its own file...
export interface IScene extends DisplayObject {
  update(framesPassed: number): void;
}
