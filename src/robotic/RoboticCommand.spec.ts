import { executeCommand } from './RoboticCommand';
import { generateTurnCommand } from './RoboticCommand.stub';
import { RoboticState } from './RoboticState';
import { generateState } from './RoboticState.stub';

describe('RoboticCommand', () => {
	let state: RoboticState;

	beforeEach(() => {
		state = generateState();
	});

	describe('executeCommand', () => {
		it('Should change the direction of state', () => {
			const initialDirection = state.direction.currentDirection;
			expect(executeCommand(generateTurnCommand(), state)).not.toEqual(
				initialDirection,
			);
		});
	});
});
