import { v4 as uuidv4 } from 'uuid';

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this._id = uuidv4(); //Math.random();
  }
  get id() {
    return this._id;
  }
  getDescription() {
    return (
      "Car's description : " +
      this.brand +
      ", " +
      this.model +
      " , ID:" +
      this.id
    );
  }
}
// default export
export default Car;
