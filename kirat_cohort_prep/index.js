const fs = require('fs');
const filePath = 'example.txt'
const contentToWrite = 'You AP Dhillon? I am Anunay!';
fs.writeFile(filePath, contentToWrite, (err) =>{
    if(err){
        console.error('Error writing to the file:', err);
    }
    else{
        console.log('Write operation successful!');
        fs.readFile(filePath, 'utf8', (err, data) =>{
            if(err){
                console.error('Error reading from the file:', err);
            } else {
              console.log('Read operation successful!\nFile content:\n', data);
            }
        })
    }
})