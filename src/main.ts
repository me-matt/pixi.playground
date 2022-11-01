import { Game } from './core/game';

const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

Game.initialize(screenWidth, screenHeight, 0x000000, document.getElementById('pixi-canvas') as HTMLCanvasElement);
