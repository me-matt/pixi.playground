// import { Application, BitmapFont, BitmapText, Container, Sprite, Ticker } from 'pixi.js';
// import { BlurFilter } from '@pixi/filter-blur';
// import { Tween, Group } from 'tweedle.js';

// import { TriangleBuilder } from './graphics/triangle-shader';
// import { Clampy } from './graphics/clampy';
// import { Thingy, Rotate as RotThingy } from './graphics/thingy';

// export const app = new Application({
// 	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
// 	resolution: window.devicePixelRatio || 1,
// 	autoDensity: true,
// 	backgroundColor: 0xffffff,
// 	width: 800,
// 	height: 600
// });


// Clampy(app);


// const thing = Thingy(app);
// RotThingy(app, thing);


// const cx = app.view.width / 2;
// const cy = app.view.height / 2;
// new TriangleBuilder()
// 	.create(cx, cy)
// 	.rotate(app)
// 	.add(app);


// HEXAGON
// const g = new Graphics();
// g.beginFill(0x00ff);

// g.moveTo(100, 100);
// g.lineTo(50, 150);
// g.lineTo(150, 150);
// g.drawCircle(400, 400, 50);
// g.endFill();
// app.stage.addChild(g);

// let shape = drawHexagon(200, 200, 50, 1, 0xff)
// app.stage.addChild(shape);

// function drawHexagon(x : number, y : number, size : number, scale : number, color : number) {
// 	var shape = new Graphics();
// 	const drag = { do: false, x, y, dx: 0, dy: 0 };

// 	const draw = () => {
// 		shape.clear();
// 		shape.beginFill(0, 0);
// 		shape.lineStyle(1, color, 1);
// 		size = size;

// 		const points : Array<Point> = []

// 		for (let i = 0; i < 7; i++) {
// 				const angle = 2 * Math.PI / 6 * (i + 0.5);
// 				const x_i = drag.x + size * Math.cos(angle);
// 				const y_i = drag.y + size * Math.sin(angle);

// 				if (i === 0) { 
// 						shape.moveTo(x_i, scale * y_i);
// 				}
// 				else {
// 						shape.lineTo(x_i, scale * y_i);
// 				}

// 				points.push(new Point(x_i, scale * y_i));
// 		};

// 		shape.hitArea = new Polygon(points);
// 		shape.interactive = true;
// 	};

// 	shape.buttonMode = true;

// 	shape.addListener('mousedown', ({ data: { global: { x, y } } }) => {
// 		drag.do = true;
// 		drag.dx = drag.x - x;
// 		drag.dy = drag.y - y;
// 	});

// 	shape.addListener('mousemove', ({ data: { global: { x, y } } }) => {
// 		if (drag.do) {
// 			drag.x = x + drag.dx;
// 			drag.y = y + drag.dy;
// 			draw();
// 		}
// 	});

// 	shape.addListener('mouseup', () => {
// 		drag.do = false;
// 	});

// 	draw();
// 	shape.endFill();

// 	return shape;
// }


// BITMAPS
// BitmapFont.from("comic 32", {
// 	fill: "#ffffff", // White, will be colored later
// 	fontFamily: "Comic Sans MS",
// 	fontSize: 32
// })

// // Remember, this font only has letters and numbers. No commas or any other symbol.
// const bitmapTexty: BitmapText = new BitmapText("I love baking, my family, and my friends",
// 	{
// 			fontName: "comic 32",
// 			fontSize: 32, // Making it too big or too small will look bad
// 			tint: 0x0 // Here we make it red.
// 	});

// bitmapTexty.text = "This is cheap";
// bitmapTexty.text = "Change it as much as you want";

// app.stage.addChild(bitmapTexty);

// // Make your filter
// const myBlurFilter = new BlurFilter();

// // Add it to the `.filters` array of any DisplayObject
// bitmapTexty.filters = [myBlurFilter];


// SCENE
// export class Scene extends Container {
// 	private clampy: Sprite;
// 	private clampyVelocity: number = 5;

// 	private readonly screenWidth: number;
// 	private readonly screenHeight: number;

// 	constructor(screenWidth: number, screenHeight: number) {
// 			super();

// 			this.screenWidth = screenWidth;
// 			this.screenHeight = screenHeight;

// 			this.clampy = Sprite.from("clampy.png");

// 			this.clampy.anchor.set(0.5);
// 			this.clampy.x = this.screenWidth / 2;
// 			this.clampy.y = this.screenHeight / 2;
// 			this.addChild(this.clampy);

// 			Ticker.shared.add(this.update, this);

// 			// See how these chains all together
// 			new Tween(this.clampy.scale).to({ x: 0.5, y: 0.5 }, 1000).repeat(Infinity).yoyo(true).start();
// 	}

// 	private update(deltaTime: number): void {
// 		this.clampy.x = this.clampy.x + this.clampyVelocity * deltaTime;

// 		if (this.clampy.x > this.screenWidth) {
// 				// Woah there clampy, come back inside the screen!
// 				this.clampy.x = 0;
// 		}

// 		// You need to update a group for the tweens to do something!
// 		Group.shared.update()
// 	}
// }



// // pass in the screen size to avoid "asking up"
// const sceny: Scene = new Scene(app.screen.width, app.screen.height);

// app.stage.addChild(sceny)
