function receivesAFunction(postRunActivity) {
    postRunActivity();
  }
  
function returnsANamedFunction(){
    return function poop() {
        console.log('fun');
    }
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log('poop');
    }
}