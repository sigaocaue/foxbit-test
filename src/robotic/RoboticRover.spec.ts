import { RoboticRover } from './RoboticRover';
import { Plateau } from '../coordinate-system';

describe('RoboticRover', () => {
	let plateau: Plateau;

	describe('The output for each rover should be its final co-ordinates and heading', () => {
		beforeEach(() => {
			plateau = new Plateau(5, 5);
		});

		it('Rover should be in 13N position', () => {
			expect(new RoboticRover(1, 2, 'N', plateau).move('LMLMLMLMM')).toBe(
				'13N',
			);
		});

		it('Rover should be in 51E position', () => {
			expect(new RoboticRover(3, 3, 'E', plateau).move('MMRMMRMRRM')).toBe(
				'51E',
			);
		});
	});
});
