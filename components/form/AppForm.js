import { Formik } from "formik";


const AppForm = ({ innerRef, initialValues, onSubmit, validationSchema, children}) => {
    
    return (
        <Formik
            innerRef={innerRef}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}  
                </>
            )}
        </Formik>
    )
}

export default AppForm;