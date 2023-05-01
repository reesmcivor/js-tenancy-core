import { ImageInputList } from '@components/ImageInputList';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';

export const FormImagePicker = ({ name }) => {
    
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri]);
    }

    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(videoUri => videoUri !== uri));
    }

    return (
        <>
            <ImageInputList 
                imageUris={imageUris} 
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            {errors[name] && <ErrorMessage error={errors[name]} visible={touched[name]} />}
        </>
    )
}

export default FormImagePicker;