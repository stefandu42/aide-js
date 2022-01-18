function addDateTime(message){
    const dateTimeNow = new Date();
    let retourner=dateTimeNow.toLocaleDateString()+" "+dateTimeNow.toLocaleTimeString()+" "+message;
    alert(retourner);
    return retourner;

}
console.log(addDateTime("hey"));