import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import BarcodeMask from 'react-native-barcode-mask'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-root-toast'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons'

const finderWidth = 280
const finderHeight = 350
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const viewMinX = (width - finderWidth) / 2
const viewMinY = (height - finderHeight) / 2

export default function ScannerQrCode({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back)
  const [showLine, setShowLine] = useState(true)
  const [ip, setIp] = useState('')

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
      handleGetItem()
    })()
  }, [])

  async function handleGetItem() {
    const ipServer = await AsyncStorage.getItem('@avivasoft:ip-server')
    const ip = JSON.parse(ipServer)
    setIp(ip.ip)
  }

  const _showAlert = (name, type, message) => {
    Toast.show(
      <View style={styles.viewModal}>
        <Ionicons
          name={type == 'success' ? 'checkmark' : 'md-close'}
          size={80}
          style={styles.icon}
        />
        <Text style={styles.modalTitle}>{message}</Text>
        <Text style={styles.modalSubTitle}>{name ? name.trim() : ''}</Text>
      </View>,
      {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: type == 'success' ? '#397c0c' : '#af1409',
        onShow: () => {},
        onShown: () => {
          // calls on toast\`s appear animation end.
        },
        onHide: () => {
          // calls on toast\`s hide animation start.
        },
        onHidden: () => {
          setScanned(false)
        }
      }
    )
  }

  const handleSuccess = (context) => {
    if (!scanned) {
      setScanned(true)
      const { type, data, bounds: { origin } = {} } = context
      const { x, y } = origin
      getUser(data)
    }
  }

  async function getUser(userId) {
    try {
      const userData = await axios.get(
        // `${ip}/api/escola-profeta/presence/${userId}`
        `https://whatsapp-nextjs-tau.vercel.app/api/escola-profeta/presence/${userId}`
      )

      if (userData.status === 200) {
        _showAlert(userData.data.name, 'success', 'Registrado com Sucesso!')
        setScanned(false)
      }
    } catch (error) {
      console.error(error)
      _showAlert('', 'error', 'Falha ao registrar!!')
      setScanned(false)
    }
  }

  if (hasPermission === null && hasPermission === false) {
    return <Text> Sem Acesso </Text>
  }

  return (
    <View style={[styles.container]}>
      <Text style={styles.text}> Leitor de Qrcode </Text>
      <View style={styles.containerScan}>
        <BarCodeScanner
          type={type}
          tvParallaxShiftDistanceX={250}
          onBarCodeScanned={scanned ? undefined : handleSuccess}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={[StyleSheet.absoluteFillObject, styles.qrCode]}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row'
            }}
          ></View>
          <BarcodeMask
            edgeColor="#62B1F6"
            showAnimatedLine={showLine}
            lineAnimationDuration={2500}
            outerMaskOpacity={1.0}
          />
        </BarCodeScanner>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  qrCode: {
    flex: 1
  },
  containerScan: {
    height: 300,
    width: 300,
    flex: 1
  },
  text: {
    fontSize: 18,
    marginTop: 100,
    color: '#efefef'
  },
  icon: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#fff'
    // marginTop: 10,
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
