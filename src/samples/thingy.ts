import { Application, Graphics } from 'pixi.js';

export const Thingy = (app : Application ) : Graphics => {
	const thing = new Graphics();
	thing.x = app.view.width / 2;
	thing.y = app.view.height / 2;
	app.stage.addChild(thing);

	return thing;
}

export const Rotate = (app : Application, thing : Graphics) : void => {
	let count = 0;

	app.ticker.add(() => {
		count += 0.1;

		thing.clear();
		thing.lineStyle(10, 0xff, 1);
		thing.beginFill(0xffFF00, 0.5);

		thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
		thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
		thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
		thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
		thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);

		thing.closePath();

		thing.rotation = count * 0.1;
	});
}
