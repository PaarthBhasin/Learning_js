function greeting(time){
    if(time>=6 && time<12){
        console.log("Good morning!");
    }
    else if(time>=12 && time<16){
        console.log("Good afternoon!");
    }
    else if(time>16 && time<20){
        console.log("Good evening!");
    }
    else{
        console.log('Good night!')
    }
}
greeting(1)