const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, l = false, hasta = 0 )  => {
    try{
        let salida= '';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} * ${i} = ${base * i}\n `);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if(l)
        {
            console.log('=======================');
            console.log('   Tabl del:'.green, colors.blue(base));

            console.log('=======================');

            console.log(salida.green);
        }

        return `tabla-${base}.txt`;
    }
    catch(error){
            throw error;
    }
}

module.exports = { crearArchivo }