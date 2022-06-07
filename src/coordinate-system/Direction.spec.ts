import { CardinalPoint } from './CardinalPoint';
import { generateCardinalPoint } from './CardinalPoint.stub';
import { Direction, getDirectionFromCardinalPoint } from './Direction';

describe('Direction', () => {
	describe('getDirectionFromCardinalPoint', () => {
		let cardinalPoint: CardinalPoint;

		beforeEach(() => {
			cardinalPoint = generateCardinalPoint();
		});

		it('Should return Direction', () => {
			expect(getDirectionFromCardinalPoint(cardinalPoint)).toHaveProperty(
				'currentDirection',
			);
		});
	});
});
