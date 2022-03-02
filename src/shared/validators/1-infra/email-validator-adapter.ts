import validator from 'validator'
import { MissingParamError } from '../../2-adapters/errors';
import { InvalidParamError } from '../errors/invalid-params-error';

export interface Validator{
    validate(input: any): Error | void
}

export class EmailValidatorAdpter implements Validator{
    validate(email: string): boolean {
        return validator.isEmail(email)
    }
}

export class EmailValidation implements Validator{
    constructor(private readonly fieldName: string, 
        private readonly emailValidator: Validator){}
    
    validate(input: any): Error | boolean {

        const isValid = this.emailValidator.validate(input[this.fieldName])
        if(!isValid)
            return new InvalidParamError(this.fieldName)
    }
}

export class ValidatorComposite implements Validator {

    constructor(private readonly validations: Validator[]){}

    validate(input: any): Error | void {
        for(const validation of this.validations){
            const error = validation.validate(input);
            if (error) {
                return error
            }
        }
    }
    
}

export class RequiredFieldValidation implements Validator {
    constructor (private readonly fieldName: string) {}
  
    validate (input: any): Error | void {
      if (!input[this.fieldName]) {
        return new MissingParamError(this.fieldName)
      }
    }
  }
  

export function makeLoginValidation(){
    const validations: Validator[] = [];
    for (const field of ['login', 'password']) {
        validations.push(new RequiredFieldValidation(field))
    }
    return new ValidatorComposite(validations);
}