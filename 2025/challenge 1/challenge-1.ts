export function getPassword(position: number, moves: string[]): number {
    const startDate = performance.now();
    let numberOfZeros: number = 0;
    let previousPosition: number;
    let newPosition: number = position;

    console.log('The dial starts by pointing at ' + position);

    moves.map((move) => {
        const direction: string = move.substring(0, 1);
        const steps: number = Number(move.substring(1));

        previousPosition = newPosition

        if (direction === 'R') {
            const calculatedPlusPosition = previousPosition + steps;
            if (calculatedPlusPosition > 99) {
                newPosition = calculatedPlusPosition % 100;
            } else {
                newPosition = calculatedPlusPosition;
            }
        } else {
            const calculatedMinPosition = previousPosition - steps;
            if (calculatedMinPosition < 0) {
                newPosition = (100 + (calculatedMinPosition % 100)) % 100;
            } else {
                newPosition = calculatedMinPosition;
            }

        }
        console.log('The dial is rotated ' + move + ' to point at ' + newPosition);

        if (newPosition === 0) {
            numberOfZeros += 1
        }
    })

    const elapsed = performance.now() - startDate;
    console.log('Execution time: ' + elapsed + 's');

    return numberOfZeros;
}
