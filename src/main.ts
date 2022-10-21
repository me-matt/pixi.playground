import { Application, Sprite } from 'pixi.js';
import clampyImg from '/static/clampy.png';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 800,
	height: 600
});

const clampy: Sprite = Sprite.from(clampyImg);

clampy.anchor.set(0.5);

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);
