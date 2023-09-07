const formulario = document.getElementById('formulario');
    
formulario.addEventListener('submit', e => {
    e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Voy a obeter los datos ingresados en el formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fechaNac = document.getElementById('fechaNac').value;

    // Crear un objeto JSON con los valores del formulario
    let formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNac: fechaNac
    };

    // Enviar los datos en formato JSON al url
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })
    // cuando la solicitud se completa exitosamente, la respuesta se pasa como argumento a la función flecha
    // que lo que hace es pasar la respuesta a formato json
    .then(response => {
        return response.json();
    })
    // acá manejamos la respuesta del servido, en este caso "data" es el nombre de la variable que se utiliza para
    // representar los datos JSON obtenidos de la respuesta del servidor(se puede usar otro nombre, es una convención).
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    // manejamos los errores
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
    });
