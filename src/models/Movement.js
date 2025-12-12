export class Movement {
  constructor({ id, description, amount, date }) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.date = date;
  }

  getNetAmount() {
    throw new Error('getNetAmount() must be implemented');
  }

  getColor() {
    throw new Error('getColor() must be implemented');
  }

  getIcon() {
    throw new Error('getIcon() must be implemented');
  }

  getTypeName() {
    throw new Error('getTypeName() must be implemented');
  }
}

export class Fee extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return -Math.abs(this.amount); 
  }

  getColor() {
    return 'orange';
  }

  getIcon() {
    return '⚠️';
  }
}
