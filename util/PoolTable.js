export const animateNext = (poolTable) => {
	let newSequence = poolTable;
	let currentSequence = poolTable.sequence;

	switch (currentSequence) {
		case 0:
			animateInDirection(newSequence, 'right', 10);
			newSequence.sequence++;
			break;
		case 1:
			animateInDirection(newSequence, 'down', 15);
			newSequence.sequence++;
			break;
		case 2:
			animateInDirection(newSequence, 'down', 15);
			newSequence.sequence++;
			break;
		case 3:
			animateInDirection(newSequence, 'left', 10);
			newSequence.sequence++;
			break;
		case 4:
			animateInDirection(newSequence, 'up', 15);
			newSequence.sequence++;
			break;
	}
	return newSequence;
}

export const animatePrev = (poolTable) => {
	let newSequence = poolTable;
	let currentSequence = poolTable.sequence;

	switch (currentSequence) {
		case 1:
			animateInDirection(newSequence, 'left', 10);
			newSequence.sequence--;
			break;
		case 2:
			animateInDirection(newSequence, 'up', 15);
			newSequence.sequence--;
			break;
		case 3:
			animateInDirection(newSequence, 'up', 15);
			newSequence.sequence--;
			break;
		case 4:
			animateInDirection(newSequence, 'right', 10);
			newSequence.sequence--;
			break;
		case 5:
			animateInDirection(newSequence, 'down', 15)
			newSequence.sequence--;
			break;
	}
	return newSequence;
}

export const animateInDirection = (poolTable, direction, amount) => {
	if (direction == 'right') {
		poolTable.xPos += amount;
	} else if (direction == 'down') {
		poolTable.yPos += amount;
	} else if (direction == 'left') {
		poolTable.xPos -= amount;
	} else if (direction == 'up') {
		poolTable.yPos -= amount;
	}
}