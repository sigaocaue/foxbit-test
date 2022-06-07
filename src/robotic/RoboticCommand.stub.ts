import { faker } from '@faker-js/faker';
import { Command } from './RoboticCommand';

export const generateCommand = (): Command =>
	faker.helpers.arrayElement(Object.values(Command));

export const generateTurnCommand = (): Command.LEFT | Command.RIGHT =>
	faker.helpers.arrayElement([Command.LEFT, Command.RIGHT]);
