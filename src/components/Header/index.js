import React, { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  BackHandler
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64

export default function Header({ name }) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp()
    })
  }, [])

  const handleClosed = async () => {
    throw {}
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.modalSubTitle}> {name.trim()} </Text>
        {/* <TouchableOpacity activeOpacity={0.8} style={styles.btnUser}>
          <Feather name="user" size={28} color="#fff" />
        </TouchableOpacity> */}
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnLogout}
          onPress={() => {
            handleClosed
          }}
        >
          <Feather name="log-out" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0,
    backgroundColor: '#8000ff',
    paddingStart: 16,
    paddingTop: statusBarHeight,
    paddingEnd: 16,
    paddingBottom: 44
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnUser: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 50
  },
  btnLogout: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 50
  }
})
