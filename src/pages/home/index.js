import { useState }from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'

let characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';

export function Home() {
    const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    
    let password= '';

    for(let i = 0, n = characterSet.length; i < size; i++){
        password += characterSet.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)
  }

    return(
        <View style={styles.container}>
          <Image
           source={require("../../assets/logo.png")}
           style={styles.logo}
          />
    
          <Text style={styles.title}>{size} Caracteres</Text>
    
          <View style={styles.area}>
            <Slider

             style={{ height: 50}}
             minimumValue={6}
             maximumValue={20}
             maximumTrackTintColor='#ff0000'
             minimumTrackTintColor='#000'
             thumbTintColor='#392de9'
             value={size}
             onValueChange={(value) => setSize(Math.round(value))}
             />
          </View>
    
          <TouchableOpacity style={styles.button} onPress={generatePassword}>
            <Text style={styles.buttonText}>Gerar senha</Text>
          </TouchableOpacity>
    
          <Modal visible={modalVisible} animationType="fade" transparent={true}>
            <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
          </Modal>
    
        </View>
      )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F3F3F3",
        justifyContent: "center",
        alignItems: 'center'
      },
      logo:{
        marginBottom: 60,
      },
      area:{
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8,
      },
      button:{
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBotton: 8
      },
      buttonText: {
        color: "#FFF",
        fontSize: 20,
      },
      title: {
        fontSize: 30,
        fontWeight: "bold"
      }
})