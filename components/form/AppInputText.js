import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Label from "js-tenancy-core/components/form/Label";
import ErrorMessage from "js-tenancy-core/components/form/ErrorMessage";
import { useFormikContext } from "formik";

const AppInputText = (props) => {

    const { name, className, icon, label } = props;
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <View className={`font-regular mb-5 ${className}`}>

            {icon && <MaterialCommunityIcons name={icon} />}

            <Label label={label} error={errors[name] ?? false} />

            <TextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                placeholderTextColor={"#CCCCCC"}
                className={`bg-white p-5 text-lg rounded-2xl border border-solid border-grey font-regular ${errors[name] ? 'border-red' : ''}`} 
                {...props} 
            />

            {errors[name] && <ErrorMessage error={errors[name]} />}

        </View>
    );
}

export default AppInputText;