import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
    const { title, buttonClassNames, textClassNames, onButtonPress } = props;
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={onButtonPress}
            className={`flex items-center rounded-2xl text-center p-5 ${buttonClassNames}`}>
            <Text className={`font-regular text-lg font-regular ${textClassNames}`}>{title}</Text>
            {props.children}
        </TouchableOpacity>
    )
}

const WhiteButton = (props) => {
    return Button({...props, buttonClassNames: props.buttonClassNames + " bg-white"});
}

const TransparentButton = (props) => {
    return Button({
        ...props, 
        buttonClassNames: props.buttonClassNames + " bg-transparent",
        textClassNames: props.textClassNames + ` text-primary`,
    });
}

const PrimaryButton = (props) => {
    return Button({
        ...props, 
        buttonClassNames: props.buttonClassNames +  ` bg-primary`, 
        textClassNames: props.textClassNames + ` text-white`,
    });
}

const BorderedButton = (props, light = true) => {
    return Button({...props, 
        buttonClassNames: props.buttonClassNames + ` bg-transparent border border-solid ` + (light ? ' border-white ' : ''), 
        textClassNames: props.textClassNames + light ? ` text-white` : ` text-primary`,
        light: light
    });
}

export default {
    white: WhiteButton, 
    transparent: TransparentButton,
    bordered: BorderedButton,
    primary: PrimaryButton
}