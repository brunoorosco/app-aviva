import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('school')}
      >
        <Text style={styles.modalSubTitle}>Escola de Profeta</Text>
        <Ionicons name="school-outline" size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('school')}
      >
        <Text style={styles.modalSubTitle}>Escanear Inscrição</Text>
        <Ionicons name="qr-code" size={28} color="#000" />
      </TouchableOpacity>
      {/* <TouchableOpacity
        activeOpacity={0.8}
        style={styles.content}
        onPress={() => navigation.navigate('visitants')}
      >
        <Text style={styles.modalSubTitle}>Aceitou Jesus</Text>
        <Ionicons name="people-outline" size={30} color="#000" />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.content}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('settings')}
      >
        <Text style={styles.modalSubTitle}>Configurações</Text>
        <Ionicons name="settings" size={28} color="#000" />
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
    borderRadius: 10,
    flex: 0,
    marginBottom: 15,
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee'
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
})
