import { View, Text } from 'react-native';

const Primary = (props) => {

    const { classNames, title } = props;
    return (
        <View className={`flex items-center mb-5`}>
            <Text className={`text-primary text-title md:text-title-md font-regular ${classNames}`}>
                {title}
            </Text>
        </View>
    );
}

const Large = (props) => {

    const { classNames, title } = props;
    return (
        <View className={`flex items-center mb-5`}>
            <Text className={`text-primary text-title-md md:text-title-xl font-regular ${classNames}`}>
                {title}
            </Text>
        </View>
    );
}

export default {
    Primary: Primary, 
    Large: Large
};