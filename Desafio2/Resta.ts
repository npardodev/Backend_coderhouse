const resta = (a, b) => a - b;

export class Resta {

	private valueOne: Number;
	private valueTwo: Number;

	constructor (valueA: Number, valueB: Number){
		this.valueOne = valueA;
		this.valueTwo = valueB;
	}

	public resultado = () => {
		return resta(this.valueOne, this.valueTwo);
	}
}