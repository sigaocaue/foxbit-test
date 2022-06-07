import { Coordinate, Direction, Plateau } from '../coordinate-system';

export interface RoboticState {
	coordinates: Coordinate;
	direction: Direction;
	plateau: Plateau;
}
