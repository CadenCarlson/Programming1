const make = prompt('Enter car make')
const model = prompt("Enter car Model")
const year = Number(prompt('Enter car year'))
const topSpeed = prompt('enter cars top speed')
const accerlation = Number(prompt('enter cars zero to sixty'))
let additionalMPH = (topSpeed / (3 * accerlation))
let stomp = false
let myCheck = false


const brakingMethod = () => {
    myCheck = document.getElementById('myCheck')
    if (myCheck.checked == true){
        stomp = true;
      } else {
        stomp = false;
      }
    }


const car = {
    year : year,
    model : model,
    make : make,
    topSpeed : topSpeed,
    speed : 0,
    accelerate() {
        if (car.speed < this.topSpeed) {
            car.speed = (additionalMPH + car.speed)
            console.log(car.speed)
            document.getElementById("speedDisplay").value = car.speed
        } else {
            car.speed = this.topSpeed
            console.log(car.speed)
            document.getElementById("speedDisplay").value= car.speed
        }
        
    },
    decelerate() {
        if (stomp === true){
            if ((car.speed - (5 * additionalMPH)) <= 0) {
                car.speed = 0
                console.log(car.speed)
                document.getElementById("speedDisplay").value= car.speed
            } else {
                car.speed = (car.speed - (8 * additionalMPH))
                console.log(car.speed)
                document.getElementById("speedDisplay").value= car.speed
            }
        } else {
            if ((car.speed - additionalMPH) <= 0) {
                car.speed = 0
                console.log(car.speed)
                document.getElementById("speedDisplay").value= car.speed
            } else {
                car.speed = (car.speed - additionalMPH)
                console.log(car.speed)
                document.getElementById("speedDisplay").value= car.speed
            }
        }
    }
}
