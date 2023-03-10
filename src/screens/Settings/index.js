import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

export default function Settings() {
  const [ip, setIp] = useState('https://whatsapp-nextjs-tau.vercel.app')
  const id = uuid.v4()

  useEffect(() => {
    handleGetItem()
  }, [])

  async function handleGetItem() {
    const ipServer = await AsyncStorage.getItem('@avivasoft:ip-server')
    const ip = JSON.parse(ipServer)
    setIp(ip.ip)
  }

  async function handleSaveIp() {
    try {
      const newData = {
        id,
        ip
      }
      await AsyncStorage.setItem(
        '@avivasoft:ip-server',
        JSON.stringify(newData)
      )
      Toast.show({
        type: 'success',
        text1: 'Cadastrado com sucesso!'
      })
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Falha ao cadastrar!'
      })
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setIp(e)
        }}
        value={ip}
        placeholder="Endereço de IP do Servidor"
      />
      <TouchableOpacity
        style={styles.content}
        activeOpacity={0.8}
        onPress={() => handleSaveIp()}
      >
        <Text style={styles.modalSubTitle}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ddd',
    height: '100%',
    padding: 10
  },
  content: {
    borderRadius: 8,
    flex: 0,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8000ff'
  },
  modalSubTitle: {
    fontSize: 18,
    color: '#ddd',
    marginEnd: 10
  },
  input: {
    height: 60,
    marginBottom: 40,
    marginTop: 15,
    backgroundColor: '#efefef',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingEnd: 20,
    paddingStart: 20,
    fontSize: 20,
    alignContent: 'center'
  }
})
