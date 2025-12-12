import { Deposit } from "../models/Deposit";
import { Withdrawal } from "../models/Withdrawal";
import { Transfer } from "../models/Transfer";
import { Payment } from "../models/Payment";
import { Fee } from "../models/Movement"; 

export class MovementFactory {
  static create(type, props) {
    const registry = {
      deposit: () => new Deposit(props),
      withdrawal: () => new Withdrawal(props),
      transfer: () => new Transfer(props),
      payment: () => new Payment(props),
      fee: () => new Fee(props) 
    };

    const creator = registry[type];

    if (!creator) {
      throw new Error("Tipo de movimiento no soportado: " + type);
    }

    return creator();
  }
}

