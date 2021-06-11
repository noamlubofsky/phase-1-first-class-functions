
function receivesAFunction(callBack) {
    callBack()
}


function returnsANamedFunction() {
    const newFunc = function() {
        console.log("this is new")
    }
    return newFunc
}

function returnsAnAnonymousFunction() {
    return () => console.log("")
}