# protolink



## Purpose

A node.js module for chaining object on prototype.
In javascript, do it with prototype chain when it comes to inherit. Even if Class feature was created in ES6, it's essentially done by prototype chain. Protolink provide simple function that can make prototype chain for two object.



## Installation

Via npm.
```
npm install protolink
```



## Usage

Base object.
```
require('protolink');

var baseEffect = {
    prepare: function (context) {
        throw new Error('Please override prepare method');
    },
    transform: function (context) {
        throw new Error('Please override transform method');
    },
    execute: function (context) {
        this.prepare(context);
        return this.transform(context);
    }
};
```

Inheritance.
```
var downToUpEffect = {
    name: 'downToUp'
};

downToUpEffect.protolink(baseEffect);

downToUpEffect.prepare = function (context) {
    console.log('prepare '+ this.name);
};

downToUpEffect.transform = function (context) {
    console.log('transform '+ this.name);
};

downToUpEffect.execute();
```

Object also could be created use constructor.




## License
Protolink is licensed under the MIT.
