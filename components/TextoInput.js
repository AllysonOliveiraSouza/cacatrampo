import { StyleSheet, TextInput } from 'react-native';

export default function TextoInput(props) {
  return (
    <TextInput style={styles.textoInput} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value} secureTextEntry={props.secureTextEntry} defaultValue={props.defaultValue} />

  )
}

const styles = StyleSheet.create({
  textoInput: {
    textAlign: 'center',
    backgroundColor: '#C6C6D0',
    borderWidth: 3,
    borderColor: '#000',
    width: '100%',
    height: 60,
    borderRadius: 30,
    fontSize: 30,
    fontWeight: 'bold',
  }
});