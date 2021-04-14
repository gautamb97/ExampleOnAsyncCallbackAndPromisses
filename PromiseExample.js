function demoOnPromise(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log("Promise resolved");
                resolve();
            }
            else {
                reject("Promise not fulfiled due to some error");
            }
        }, 2000);
    })
}

demoOnPromise().then(function(){
    console.log("Thanks for resolving");
}).catch(function(error){
    console.log("Oppsss " + error);
})