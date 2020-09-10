function clock(){
    const hours = document.getElementById('hrs')
    const minutes = document.getElementById('mins')
    const seconds = document.getElementById('secs')
    const getDate = new Date()

    hours.textContent = getDate.getHours() % 12 
    minutes.textContent = getDate.getMinutes()
    seconds.textContent = getDate.getSeconds()    


    function addTimeFrame(){
        if(hours.innerText > 11){
            hours.innerText += 'PM'.toLocaleLowerCase()
        }else{
            hours.innerText += ' AM'
        }
    }
    // addTimeFrame()

    function greet(){
        const greetings = document.getElementById('greet')
        if(hours.textContent >= 12){
            greetings.textContent = 'Good afternoon'
        }else if(hours.textContent <= 11) {
            greetings.textContent = 'Good morning...'
        }
    }
    // greet()
}
setInterval(clock, 1000 )