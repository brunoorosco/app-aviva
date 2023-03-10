import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Toast from 'react-native-root-toast'

export default function CustomToast(name) {
  return Toast.show(
    <View style={styles.viewModal}>
      <Ionicons name="checkmark" size={80} style={styles.icon} />
      <Text style={styles.modalTitle}>Registrado com Sucesso!</Text>
      <Text style={styles.modalSubTitle}>{name.trim()}</Text>
    </View>,
    {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: '#397c0c',
      onShow: () => {
        setDisplayShow('none')
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        setDisplayShow('flex')
        setScanned(false)
      }
    }
  )
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#fff'
  },
  viewModal: {
    height: 150,
    width: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  modalTitle: {
    fontSize: 18,
    color: '#eee',
    marginBottom: 10
  },
  modalSubTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})
