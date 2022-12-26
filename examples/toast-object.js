import Kdu from 'kdu';
import KduToasted from 'kdu-toasted';

Kdu.use(KduToasted);

let toast = Kdu.toasted.show('hello there, i am a toast !!');

// now you can use the toast object methods
toast
    // change the text
    .text("change me now")

    // fade away in 1.5 seconds
    .goAway(1500);