function sum(a, b) {
    return a + b;
}

const CONTEXT_TYPE = {
    CREATE : 'create'
}
function foo(context){
    if(context.type == CONTEXT_TYPE.CREATE){
        this.bar();
    }
    else{
        console.log('bar not called');
    }
}

function bar(){
    console.log("bar called");
}

module.exports =  {sum, foo, bar}