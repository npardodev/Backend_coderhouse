
const suma = (a, b) => a + b;

export class Suma {

	private valueOne: Number;
	private valueTwo: Number;

	constructor (valueA: Number, valueB: Number){
		this.valueOne = valueA;
		this.valueTwo = valueB;
	}

	public resultado = () => {
		return suma(this.valueOne, this.valueTwo);
	}
}