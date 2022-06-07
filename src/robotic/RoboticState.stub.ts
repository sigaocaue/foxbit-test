import { RoboticState } from './RoboticState';
import {
	CoordinateStub,
	DirectionStub,
	PlateauStub,
} from '../coordinate-system';

export const generateState = (): RoboticState => {
	return {
		coordinates: CoordinateStub.generateCoordinate(),
		direction: DirectionStub.generateDirection(),
		plateau: PlateauStub.generatePlateau(),
	};
};
