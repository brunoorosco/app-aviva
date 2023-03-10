import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Masks } from '../../utils/mask'
import uuid from 'react-native-uuid'
import RadioForm from 'react-native-simple-radio-button'

export default function Visitants() {
  const [name, setName] = useState('')
  const [cem, setCem] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [end, setEnd] = useState('')
  const [batizado, setBatizado] = useState(false)
  const options = [
    { value: 'aceitou', label: 'Aceitou' },
    { value: 'reconciliou', label: 'Reconciliou' }
  ]

  function handleNewVisitant() {
    const id = uuid.v4()

    const newData = {
      id,
      name,
      whatsApp,
      cem,
      batizado
    }
    console.log(newData)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(v) => setName(Masks.inputName(v))}
        value={name}
        placeholder="Nome Completo"
      />
      <TextInput
        style={styles.input}
        onChangeText={(v) => setWhatsApp(Masks.phone(v))}
        value={whatsApp}
        placeholder="WhatsApp"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCem}
        value={cem}
        placeholder="Rede/Cem"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEnd}
        value={end}
        placeholder="Endereço, Nº"
      />

      <View>
        <Text style={styles.radioText}>Aceitou/Reconciliou</Text>
        <View style={styles.radioContainer}>
          <RadioForm
            style={styles.radio}
            radio_props={options}
            initial={0}
            onPress={(v) => {
              setBatizado(v)
            }} //if the user changes options, set the new value
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.content}
        activeOpacity={0.8}
        onPress={() => handleNewVisitant()}
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
    backgroundColor: '#8000ff',
    marginTop: 40
  },
  modalSubTitle: {
    fontSize: 18,
    color: '#ddd',
    marginEnd: 10
  },
  input: {
    height: 60,
    marginTop: 15,
    backgroundColor: '#efefef',
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingStart: 15,
    paddingEnd: 15,
    fontSize: 18
  },
  radioContainer: {
    flex: 0,
    flexDirection: 'row'
  },
  radioText: {
    fontSize: 20,
    color: '#555',
    marginTop: 10
  }
})
