const a = 10;
const b =3;
let c = 3;

function getc(){
    console.log(c);
}
getc();

function getb(){
    console.log(b);
}

const newFun=()=>{
    console.log('new fun Added');
    console.log('this is arrow fun');
}

function newFunb (){
    console.log('this is fun b');
}

newFunb();

newFun();

getb();