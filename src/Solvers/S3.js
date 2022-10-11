// import React from 'react';
import Solver from './Solver';

export class S3a extends Solver {
	solve(input) {
		if (input === "") {
			this.setState({ solution: `No input yet` })
		} else {
			this.setState({ solution: `No solution yet` })
		}
	}
}

export class S3b extends Solver {
}