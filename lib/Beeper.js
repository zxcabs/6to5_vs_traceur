/**
 * @author "Evgeny Reznichenko" <kusakyky@gmail.com>
 */


class Beeper {
    constructor(name) {
        this.name = name;
    }

    template(name) {
        return 'beep: ${name}';
    }

    beep() {
        console.log(template(this.name));
    }
}

class BeeperA extends Beeper {
    constructor() {
        super('BeeperA');
    }
}

class BeeperB extends Beeper {
    constructor() {
        super('BeeperB');
    }

    template(name) {
        return 'template B from ${name}';
    }
}

export {BeeperA, BeeperB};
