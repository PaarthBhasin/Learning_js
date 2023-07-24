// double equal doesn't match the datatypes....it only matches the values.
//  eg. let x='10' is equal to let x=10; ie. string is equal to number

const x =10;
const color = x>10 ? 'red':'blue';

console.log(color);

switch(color)
{
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is either red or blue. And this case will not take place ;)');
        break;
}