export class Ingredient {
  constructor(public name: string, public amount: number) {}

  equals(that: Ingredient): boolean {
    return this.name.valueOf() === that.name.valueOf();
  }
}
