import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import Buttons from "js-tenancy-core/components/Buttons";
import Headings from "js-tenancy-core/components/typography/Headings";
import { openInbox } from 'react-native-email-link';

const EmailAction = ({ navigation, title, description, backAction }) => {

    return (
        <SafeAreaView className="flex-1 bg-blue-50">

            <TouchableOpacity onPress={backAction} className="top-5 left-5 z-10">
                <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>

            <View className="flex-1 justify-between p-5 items-center">
                <View className="flex-1 justify-center w-full max-w-sm">   

                    <View className="flex w-full items-center">
                        <View className="w-60 flex items-center items-center">
                            <Headings.Large title={title} classNames="mt-5 text-center" />
                            <Text className="text-lg text-blue-200 text-center leading-6 max-w-xs">
                                {description}
                            </Text>
                        </View>
                    </View>

                </View>

                <View>
                    
                </View>

                <View className="sm:max-w-xs w-full">
                    <Buttons.primary title="Open email app" buttonClassNames="w-full mb-3" 
                        onButtonPress={() => openInbox()} 
                    />
                </View>
            </View>
        </SafeAreaView>
    )

}

export default EmailAction;