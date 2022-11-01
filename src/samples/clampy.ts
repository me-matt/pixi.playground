import { Application, Sprite } from 'pixi.js';
import clampyImg from '/static/clampy.png';

export const Clampy = (app: Application): Sprite => {
  const clampy: Sprite = Sprite.from(clampyImg);
  clampy.anchor.set(0.5);
  clampy.x = app.screen.width / 2;
  clampy.y = app.screen.height / 2;
  app.stage.addChild(clampy);

  return clampy;
};
