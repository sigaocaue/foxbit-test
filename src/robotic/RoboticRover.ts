import { Command, commandMap, executeCommand } from './RoboticCommand';
import { RoboticState } from './RoboticState';
import {
	CardinalPoint,
	Coordinate,
	getDirectionFromCardinalPoint,
	Plateau,
} from '../coordinate-system';

export class RoboticRover {
	private state: RoboticState;

	constructor(
		readonly initialPositionX: number,
		readonly initialPositionY: number,
		readonly initialDirection: string,
		readonly plateau: Plateau,
	) {
		const direction = getDirectionFromCardinalPoint(
			initialDirection.toUpperCase().trim() as CardinalPoint,
		);

		this.state = {
			coordinates: new Coordinate(initialPositionX, initialPositionY, plateau),
			direction,
			plateau,
		};
	}

	move(commands: string): string {
		commands
			.replace(/\s/g, '')
			.split('')
			.forEach((command: string) => {
				const currentCommand = commandMap.get(command) || Command.NONE;
				this.state = executeCommand(currentCommand, this.state);
			});

		return `${this.state.coordinates.positionX}${this.state.coordinates.positionY}${this.state.direction.currentDirection}`;
	}
}
