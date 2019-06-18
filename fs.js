const fs = require('fs');
const file = 'myFile';
const command = process.argv[2];
const fcommand = process.argv[3];
const encoding = 'utf-8';
// const endOfLine= require('os').EOL;


switch(command){
    case 'add':
        fs.readFile(file,encoding,(err , data)=>{
            if(err) throw err;
            let arr = JSON.parse(data);
            arr.push(fcommand);

            fs.writeFile(file,JSON.stringify(arr),(err)=>{
                if(err) throw err;
                console.log(arr);
                console.log('the item added')
            });
        });
    break;
    case 'list':
        fs.readFile(file,encoding,(err,data)=>{
            if(err) throw err;
            console.log(data);
        });
    break;
    case 'remove':
        fs.readFile(file,encoding,(err,data)=>{
            if(err) throw err;
            let arr = JSON.parse(data);
            arr.splice(fcommand-1 , 1);
            fs.writeFile(file,JSON.stringify(arr),(err)=>{
                if(err) throw err;
                console.log('the item removed')
            });
        });
    break;
    case 'reset':
        fs.writeFile(file,'[]',encoding,(err)=>{
            if(err) throw err;
            console.log('file reseted')
        });
    break;
    default:
        console.log(`
        list---view that you have inclued
        add---to add something to list
        remove---you can remove by number (EX:remove 1 or remove 2)
        reset---to remove all thing from the list
        `);
}




