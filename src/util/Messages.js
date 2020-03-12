
const messages={
    validation:{
        firstName:{
            format:'El nombre debe tener solo letras',
            minLength:'El nombre no tiene la longitud minima requerida: ',
            maxLength: 'El nombre no tiene la longitund maxima requerida: '
        },
        secondName:{
            format:'El segundo nombre debe tener solo letras',
            minLength:'El nombre ingresado no tiene la longitud minima requerida: ',
            maxLength: 'El nombre ingresado no tiene la longitund maxima requerida: '
        },
        lastName:{
            format:'El apellido paterno debe tener solo letras',
            minLength:'El apellido paterno no tiene la longitud minima requerida: ',
            maxLength: 'El apellido paterno no tiene la longitund maxima requerida: '
        },
        lastSecondName:{
            format:'El apellido materno debe tener solo letras',
            minLength:'El nombre ingresado no tiene la longitud minima requerida: ',
            maxLength: 'El nombre ingresado no tiene la longitund maxima requerida: '
        },
        email:{
            format:'El email no cumple con el formato adecuado: cuenta@dominio.com',
            minLength:'El email no tiene la longitud minima requerida: ',
            maxLength: 'El email no tiene la longitund maxima requerida: '
        },
        homePhone:{
            format:'El telefono debe ser numerico',
            minLength:'El telefono no tiene la longitud minima requerida: ',
            maxLength: 'El telefono no tiene la longitund maxima requerida: '
        },
        cellPhone:{
            format:'El telefono debe ser numerico',
            minLength:'El telefono no tiene la longitud minima requerida: ',
            maxLength: 'El telefono no tiene la longitund maxima requerida: '
        }
    },
    viewUser:{
        acceptanceView: 'La informacion de la Landing ha sido guardada exitosamente'
    }
}

export {messages};