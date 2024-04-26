import { View, InputText } from "react-native";
import styles from "../styles/styles";

export default function InputText(props) {
    return (
        <View>
            <TextInput style={styles.inputTexto} placeholder={props.placeholder} keyboardType={props.keyboardType}></TextInput>
        </View>

    );
}