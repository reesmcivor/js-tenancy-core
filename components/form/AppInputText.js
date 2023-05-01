import React from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "@constants/colors";
import Label from "@components/form/Label";
import ErrorMessage from "@components/form/ErrorMessage";
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
                placeholderTextColor={colors["grey-300"]}
                className={`bg-white p-5 text-lg rounded-2xl h-50 border border-solid border-grey font-regular ${errors[name] ? 'border-red' : ''}`} 
                {...props} 
            />

            {errors[name] && <ErrorMessage error={errors[name]} />}

        </View>
    );
}

export default AppInputText;