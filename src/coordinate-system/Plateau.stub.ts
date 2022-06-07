import { faker } from '@faker-js/faker';
import { Plateau } from './Plateau';

export const generatePlateau = (): Plateau =>
	new Plateau(
		faker.datatype.number({ min: 2, max: 99 }),
		faker.datatype.number({ min: 2, max: 99 }),
	);
