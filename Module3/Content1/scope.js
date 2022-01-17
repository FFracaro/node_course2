//escopo global
const nameA = 'aaa';

function speak(){
    console.log(nameA);
}

speak();

function a(){
    const nameA = 'bbb';
    speak(); //utiliza a variavel no escopo global e não local
}

a();

//CALLBACKS
function rand(min = 1000, max = 2000){
    const num = Math.random() * (max - min) + min;
    return num;
}

function f1(callback){
    setTimeout(function(){
        console.log('f1');  
        if(callback) callback();      
    }, rand());
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');   
        if(callback) callback();       
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');  
        if(callback) callback();       
    }, rand());
}

f1();
f2();
f3();

f1(function(){
    f2(function(){
        f3();
    });
});

f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3();
}