"use strict"
require('../index.js')
var assert = require('assert');

//--------------------------case1----------------------------
var a1 = {
    a1_prp1: 'a1_v1'
};

var b1 = {
    b1_prp1: 'b1_v1',
    b1_f1:function(){
        return 'b1_f1_result';
    }
}

a1.protolink(b1);
console.log(a1.b1_prp1);
console.log(assert.equal(a1.b1_prp1, b1.b1_prp1, 'case1_1 not equal') ? '' : 'case1_1 ok');
console.log(assert.equal(a1.b1_f1(), b1.b1_f1(), 'case1_2 not equal') ? '' : 'case1_2 ok');

//--------------------------case2----------------------------
function A2(){
    this.a2_prp1='a2_v1';
}

var a2 = new A2;

var b2 = {
    b2_prp1: 'b2_v1',
    b2_f1:function(){
        return 'b2_f1_result';
    }
}

a2.protolink(b2);
console.log(a2.b2_prp1);
console.log(assert.equal(a2.b2_prp1, b2.b2_prp1, 'case2_1 not equal') ? '' : 'case2_1 ok');
console.log(assert.equal(a2.b2_f1(), b2.b2_f1(), 'case2_2 not equal') ? '' : 'case2_2 ok');

//--------------------------case3----------------------------
var a3 = {
    a3_prp1: 'a3_v1'
};

function B3(){
    this.b3_prp1= 'b3_v1';

    this.b3_f1=function(){
        return 'b3_f1_result';
    };
}

var b3 = new B3;

a3.protolink(b3);
console.log(a3.b3_prp1);
console.log(assert.equal(a3.b3_prp1, b3.b3_prp1, 'case3_1 not equal') ? '' : 'case3_1 ok');
console.log(assert.equal(a3.b3_f1(), b3.b3_f1(), 'case3_2 not equal') ? '' : 'case3_2 ok');

//--------------------------case4----------------------------
function A4(){
    this.a4_prp1='a4_v1';
}

var a4 = new A4;

function B4(){
    this.b4_prp1= 'b4_v1';

    this.b4_f1=function(){
        return 'b4_f1_result';
    };
}

var b4 = new B4;

a4.protolink(b4);
console.log(a4.b4_prp1);
console.log(assert.equal(a4.b4_prp1, b4.b4_prp1, 'case4_1 not equal') ? '' : 'case4_1 ok');
console.log(assert.equal(a4.b4_f1(), b4.b4_f1(), 'case4_2 not equal') ? '' : 'case4_2 ok');