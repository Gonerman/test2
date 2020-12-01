function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    if(hour >= 12 && hour <= 18){
        alert('Привет');
    }else{
        alert('Пока!');
    }    
}