import { Text } from "react-native";

const Label = ({ label, error }) => {
    return (
        <Text className={`text-lg mb-2 font-regular text-primary ${error ? 'text-red' : ''}`}>
            {label}
        </Text>
    );
}

export default Label;