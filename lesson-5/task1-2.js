"use stric"

function devide(){
    console.log('==================================');
}
devide();

function makeBuffer(){
    let message ='';

    return {
        add : function(value){
            message += value + ' ';
        },

        clear : function(){
            message = '';
        },

        print : function(){
            return message;
        }
    }
}

let buffer = makeBuffer();

buffer.add('Java Script');
buffer.add('need to');
buffer.add('learn');

console.log(buffer.print());
devide();

buffer.clear();
console.log(buffer.print());
devide();

buffer.add(0);
buffer.add(1);
buffer.add(0);

console.log(buffer.print());
devide();



