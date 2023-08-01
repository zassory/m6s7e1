const { response , request } = require('express');
const http = require('http');

const animales = {
    1:{
        animal: 'perro',
        raza: 'siberian husky',
        edad: 15
    },
    2:{
        animal:'gato',
        raza: 'mainecoon',
        edad:20
    }
}
http.createServer((req,res = response)=> {
    // let data;
    // req.on('data', (body) => {
    //     console.log(JSON.parse(body));
    // });
    // req.on('end', ()=> {
    //     console.log(data);
    // });
    const url = new URL(req.url,`http://${req.headers.host}`);
    const params = new URLSearchParams(url.searchParams);

    // if(req.url.startsWith('/animales') && req.method == 'PUT'){
    //     let animal;
    //     req.on('data', (datos) => {
    //         animal = JSON.parse(datos);
    //     })
    //     req.on('end', ()=> {

    //         const id = params.get('id');
    //         const animalActualizado = { ...animales[id], ...animal }//Actualizando animal
    //         animales[id] = animalActualizado;//Redefiniendo animal denteo de objeto inicial animales
    //         // const nuevoId = Object.keys(animales).length + 1;
    //         // animales[nuevoId] = nuevoAnimal;
    //         //res.write(JSON.stringify(animales,null,2));
    //         res.write(JSON.stringify(animales,null,2));
    //         res.end();
    //     });
    // }
    
    // if(req.url.startsWith('/animales') && req.method == 'GET'){
    //     res.write(JSON.stringify(animales,null,2));
    //     res.end();
    // }

    // console.log(params.get('valor1'));
    // console.log(params.get('valor2'));
})
.listen(3000, ()=> {
    console.log("Servidor iniciado en puerto 3000");
})