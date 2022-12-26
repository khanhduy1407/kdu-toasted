import Kdu from 'kdu';
import KduToasted from 'kdu-toasted';

Kdu.use(KduToasted, {
    globalToasts : {

        // have your toast name as propery name
        // it should accept 2 parameters 'payload' and 'initiate' callback
        // NOTE : you should return the initiate callback
        myCustomError : function(payload, initiate){

            // have your logic here
            if(payload.someProperty == true) {
                return initiate(payload.someProperty.message, 'error');
            }

            // initiate(Message/html, option/string)
            // error/show/success/info you can pass main function names or an option object
            return initiate("My Deepest Condolence", 'error');
        }
    }
});

// using the global toast anywhere
let toast = Kdu.$toasted.global.myCustomError({
    someProperty : {
        message : 'a message'
    }
});

