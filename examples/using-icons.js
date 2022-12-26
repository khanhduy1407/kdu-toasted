import Kdu from 'kdu';
import KduToasted from 'kdu-toasted';

Kdu.use(KduToasted, {
    iconPack : 'material' // set your iconPack, defaults to material. material|fontawesome|custom-class
});

/* NOTE : You will have to import material icons in order to work */

// use icon name as a string
Kdu.toasted.show('hello there, i am a toast !!', { icon : 'check'});

// you can pass an object and use name
Kdu.toasted.show(
    'hello there, i am a toast !!', {
        icon : {
            name : 'check'
        }
});

// use after to append the icon after the content
Kdu.toasted.show(
    'hello there, i am a toast !!', {
        icon : {
            name : 'check',
            after : true
        }
});

// Custom Class Icon Pack
Kdu.use(KduToasted, {
    iconPack: 'custom-class' // set your iconPack, defaults to material. material|fontawesome|custom-class
});

// append any class to the toaster icon
Kdu.toasted.show(
    'hello there, i am a toast !!', {
        icon: {
            name: 'fal fa-check fa-spin fa-fw',
        }
    });
