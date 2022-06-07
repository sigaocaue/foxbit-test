import { generateCardinalPoint } from './CardinalPoint.stub';
import { Direction, getDirectionFromCardinalPoint } from './Direction';

export const generateDirection = (): Direction =>
	getDirectionFromCardinalPoint(generateCardinalPoint());
