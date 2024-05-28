import {StyleSheet,TextInput} from 'react-native';

export default function TextoInput(){
  return(
    <TextInput style={styles.textoInput}/>

  )
}

const styles = StyleSheet.create({
textoInput:{
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