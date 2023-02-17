import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleSuccess = context => {
    setScanned(true)
    console.log(context)
  }

  if (hasPermission === null && hasPermission === false) {
    return <Text>Sem Acesso</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Leitor de Qrcode</Text>
      <BarCodeScanner
        type={type}
        onBarCodeScanned={scanned ? undefined : handleSuccess}
        style={styles.qrCode}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  qrCode: {
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 18,
    marginTop: 100
  }
})
