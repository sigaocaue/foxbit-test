import { Direction } from './Direction';
import { CardinalPoint } from './CardinalPoint';
import { Coordinate } from './Coordinate';
import { Plateau } from './Plateau';

export class NorthDirection implements Direction {
	currentDirection: CardinalPoint = CardinalPoint.NORTH;

	left() {
		return CardinalPoint.WEST;
	}

	right() {
		return CardinalPoint.EAST;
	}

	move(from: Coordinate, plateau: Plateau): Coordinate {
		return new Coordinate(
			from.positionX,
			from.positionY === plateau.sizeY ? 0 : from.positionY + 1,
			plateau,
		);
	}
}

export class SouthDirection implements Direction {
	currentDirection = CardinalPoint.SOUTH;

	left() {
		return CardinalPoint.EAST;
	}

	right() {
		return CardinalPoint.WEST;
	}

	move(from: Coordinate, plateau: Plateau): Coordinate {
		return new Coordinate(
			from.positionX,
			from.positionY === 0 ? plateau.sizeY : from.positionY - 1,
			plateau,
		);
	}
}

export class EastDirection implements Direction {
	currentDirection = CardinalPoint.EAST;

	left() {
		return CardinalPoint.NORTH;
	}

	right() {
		return CardinalPoint.SOUTH;
	}

	move(from: Coordinate, plateau: Plateau): Coordinate {
		return new Coordinate(
			from.positionX === plateau.sizeX ? 0 : from.positionX + 1,
			from.positionY,
			plateau,
		);
	}
}

export class WestDirection implements Direction {
	currentDirection = CardinalPoint.WEST;

	left() {
		return CardinalPoint.SOUTH;
	}

	right() {
		return CardinalPoint.NORTH;
	}

	move(from: Coordinate, plateau: Plateau): Coordinate {
		return new Coordinate(
			from.positionX === 0 ? plateau.sizeX : from.positionX - 1,
			from.positionY,
			plateau,
		);
	}
}
