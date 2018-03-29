// const CUSTOMER_1 = 1;
// const CUSTOMER_2 = 2;

class Decisions {
    constructor() {
        this._features = new Map();
    }

    get(key, defaultCodeBit) {
        let codeBit = this._features.get(key);
        if (!codeBit) {
            codeBit = defaultCodeBit;
        }
        return codeBit;
    }

    setCustomer(id) {
        return import ('./' + id + '/config.js').then(decisions => {
            this._features = decisions.default;
            // must use .default, probably because there may be multiple exports from the requested file
        }).then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        });
    } 
}

export const decisions = new Decisions();