import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, Alert, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  return (

      <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>This is modal!</Text>
              <Pressable
                style={styles.button}
                onPress={() => {setModalVisible(!modalVisible)}}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
        style={styles.button} 
          onPress={() => { setModalVisible(true)}}>
          <Text style={styles.textStyle}>Show modal</Text>
        </Pressable>
        </SafeAreaView>
      <StatusBar style="auto" />
        </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 16,
    elevation: 2,
    color: 'white',
    backgroundColor: 'blue'
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});