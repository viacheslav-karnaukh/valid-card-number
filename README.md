# valid-card-number

> A tool for credit card number validation as well as IMEI of your mobile device validation (use *#06# on your phone to find out IMEI). Luhn algorithm was used for development of this tool.


#### Installation:

```sh
npm install valid-card-number
```

#### Example of usage:

```javascript
let validate = require('valid-card-number').isValid;
        
// IMEI validation
validate('352029076059545'); // true
        
// bank card validation
validate('4929778869082405'); // true
```
    
#### To run tests use the following command from the module directory:

```sh
npm test
```

**Happy hacking!**
