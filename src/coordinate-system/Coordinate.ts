import { Plateau } from './Plateau';

export class Coordinate {
	private readonly _positionX: number;
	private readonly _positionY: number;

	constructor(
		positionX: number,
		positionY: number,
		private readonly plateau: Plateau,
	) {
		this._positionX = Math.max(0, Math.min(plateau.sizeX, positionX));
		this._positionY = Math.max(0, Math.min(plateau.sizeY, positionY));
	}

	get positionX(): number {
		return this._positionX;
	}

	get positionY(): number {
		return this._positionY;
	}
}
