import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ErrorMessage = ({ error, errorClassNames }) => {
    return (
        <View className={`flex flex-row items-center pt-2 ${errorClassNames}`}>
            <View className="pr-2">
                <FontAwesome name="warning" size={16} color="red" />
            </View>
            <Text className="text-red">{error}</Text>
        </View>
    );
}

export default ErrorMessage;