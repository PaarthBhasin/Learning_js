const car = { make:'Honda', model:'Accord', year:1998};
console.log('make' in car);
delete car.make;
if('make' in car === false){
    car.make='Suzuki';
}
console.log(car.make)
delete car.model;
car.model = 'City';
console.log(car.model)