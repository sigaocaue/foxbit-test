import { faker } from '@faker-js/faker';
import { Coordinate } from './Coordinate';
import { generatePlateau } from './Plateau.stub';

export const generateCoordinate = (): Coordinate =>
	new Coordinate(
		faker.datatype.number({ min: 2, max: 99 }),
		faker.datatype.number({ min: 2, max: 99 }),
		generatePlateau(),
	);
