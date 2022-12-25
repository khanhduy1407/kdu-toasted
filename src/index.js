import {Toasted as T} from './js/toast';
import ToastComponent from './toast.kdu';

const Toasted = {
    install(Kdu, options) {
        if (!options) {
            options = {};
        }

        const Toast = new T(options);
        Kdu.component('toasted', ToastComponent);
        Kdu.toasted = Kdu.prototype.$toasted = Toast;
    }
};

// register plugin if it is used via cdn or directly as a script tag
if (typeof window !== 'undefined' && window.Kdu) {
    window.Toasted = Toasted;
}

export default Toasted
