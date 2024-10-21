
import * as Yup from "yup"

export function initialValues() {
    return {
        email: '',
        password: '',
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string()
            .email('El correo está mal escrito')
            .required('Necesito tu correo ya!'),
        password: Yup.string()
            .required('la contra es obligatoria'),
    });
}