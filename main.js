function calcBMI (mass,height){
    let cal = ((mass / height ** 2) * 10000)
    return cal
}



document.getElementById('calc').addEventListener('click', _ => {
    let foo = document.getElementById('mass').value
    let bar = document.getElementById('height').value
    let calc = Math.round(calcBMI(foo, bar));
    const BMI = document.getElementById('result').innerText = 'Your BMI is ' + calc
})