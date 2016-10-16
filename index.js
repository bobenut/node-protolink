"use strict"

Object.prototype.protolink = function(protoObj){
    if(typeof(this)==='function'){
        return;
    }

    if(this.__proto__!==Object.prototype){
        return this.__proto__.protolink(protoObj);
    }

    return this.__proto__ = protoObj;
}



