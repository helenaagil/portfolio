var today = new Date();
var hourNow = today.getHours();
var greeting;


if (hourNow > 20) {
    greeting = 'Boa Noite';
}
else if (hourNow > 12){
    greeting = 'Boa Tarde';
}
else if (hourNow > 7){
    greeting = 'Bom Dia';
}
else {
    greeting = 'É tarde, bom descanso';
}
document.write(greeting);