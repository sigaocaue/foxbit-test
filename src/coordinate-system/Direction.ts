import { CardinalPoint } from './CardinalPoint';
import {
	NorthDirection,
	SouthDirection,
	EastDirection,
	WestDirection,
} from './CardinalPointDirection';
import { Coordinate } from './Coordinate';
import { Plateau } from './Plateau';

export interface Direction {
	currentDirection: CardinalPoint;
	left(): CardinalPoint;
	right(): CardinalPoint;
	move(from: Coordinate, plateau: Plateau): Coordinate;
}

export const getDirectionFromCardinalPoint = (
	cardinalPoint: CardinalPoint,
): Direction => {
	switch (cardinalPoint) {
		case CardinalPoint.NORTH:
			return new NorthDirection();
		case CardinalPoint.SOUTH:
			return new SouthDirection();
		case CardinalPoint.EAST:
			return new EastDirection();
		case CardinalPoint.WEST:
			return new WestDirection();
	}
};
