import { RoboticState } from './RoboticState';
import { getDirectionFromCardinalPoint } from '../coordinate-system';

export enum Command {
	NONE = 'N',
	LEFT = 'L',
	RIGHT = 'R',
	MOVE = 'M',
}

export const commandMap = new Map<string, Command>([
	['L', Command.LEFT],
	['R', Command.RIGHT],
	['M', Command.MOVE],
]);

export function executeCommand(
	command: Command,
	currentState: RoboticState,
): RoboticState {
	switch (command) {
		case Command.LEFT:
			return {
				...currentState,
				direction: getDirectionFromCardinalPoint(currentState.direction.left()),
			};
		case Command.RIGHT:
			return {
				...currentState,
				direction: getDirectionFromCardinalPoint(
					currentState.direction.right(),
				),
			};
		case Command.MOVE:
			return {
				...currentState,
				coordinates: currentState.direction.move(
					currentState.coordinates,
					currentState.plateau,
				),
			};
		default:
			return currentState;
	}
}
