const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite = 10) => {

    return new Promise( (resolve,reject) => {

        console.log("=====================".green);
        console.log(`Tabla del ${base}`.green);
        console.log("=====================".green);

        if(!Number(base) || !Number(limite)){
            reject("Introduce solo valores numericos");
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} X ${index} = ${base * index} \n`;
        }

        resolve(data);

    });

}


let crearArchivo = (base,limite) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if(!Number(base)){
            reject("El valor introducido no es un numero");
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += `${base} X ${index} = ${base * index} \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}

