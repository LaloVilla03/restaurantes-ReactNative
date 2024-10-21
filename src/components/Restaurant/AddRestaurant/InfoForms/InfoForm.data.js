
import * as Yup from "yup"

export function initialValues() {
    return {
        nombre: '',
        direccion: '',
        descripcion: ''
    }
}

export function validationSchema() {
    return Yup.object({
        nombre: Yup.string()
            .required('Ingresa un nombre'),
        direccion: Yup.string()
            .required('Ingresa una direccion'),
        descripcion: Yup.string()
            .required('Ingresa una descripcion')
    });
}