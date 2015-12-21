# valid-card-number

> A tool for credit card number validation as well as IMEI of your mobile device validation (use *#06# on your phone to find out IMEI). Luhn algorithm was used for development of this tool.



#### Example of usage:

```javascript
let validate = require('./valid-card-number').isValid;
        
// IMEI validation
validate('352029076059545'); // true
        
// bank card validation
validate('4929778869082405'); // true
```
    
#### To run tests use the following command from the module directory:

```sh
npm test
```
    
#### To compile module in ES5 code simply run:

```sh
npm run toES5
```
#### Then you can use the module as follows:

```javascript
let validate = require('./valid-card-number/es5/valid-card-number').isValid;
        
// IMEI validation
validate('352029076059545'); // true
        
// bank card validation
validate('4929778869082405'); // true
```

**Happy hacking!**
