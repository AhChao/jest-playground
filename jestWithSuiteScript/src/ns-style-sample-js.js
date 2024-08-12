/**
* @NApiVersion 2.1
*/
define([],
    () => {
        const CONTEXT_TYPE = {
            CREATE: 'create'
        };

        function sum(a, b) {
            return a + b;
        }

        function foo(context) {
            if(context.type === CONTEXT_TYPE.CREATE) {
                this.bar(); // this would pass
                //bar(); // this would fail
            }
            else {
                console.log('bar not called');
            }
        }

        const fooConst = (context) =>{
            if(context.type === CONTEXT_TYPE.CREATE) {
                this.bar(); // this would fail
            }
            else {
                console.log('bar not called');
            }
        }

        function bar() {
            console.log("bar called");
        }

        // Return an object with the methods you want to expose
        return {
            sum: sum,
            foo: foo,
            bar: bar,
            fooConst: fooConst
        };

    });