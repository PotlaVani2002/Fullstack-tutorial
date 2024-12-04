this.onmessage=function(e){
    if(e.data!=undefined){
        this.postMessage(e.data.num1+e.data.num2);
    }
}