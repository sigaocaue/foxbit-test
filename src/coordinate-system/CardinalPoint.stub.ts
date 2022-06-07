import { faker } from '@faker-js/faker';
import { CardinalPoint } from './CardinalPoint';

export const generateCardinalPoint = (): CardinalPoint =>
	faker.helpers.arrayElement<CardinalPoint>(Object.values(CardinalPoint));
