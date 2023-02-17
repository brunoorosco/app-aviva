import React, { Suspense, lazy } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const Camera = lazy(() => import('./pages/Camera'))
  return (
    <>
      <Suspense fallback={<Text>Carregando...</Text>}>
        {/* <NavigatorContainer>
        <Stack.Navigator>

        </Stack.Navigator>
      </NavigatorContainer> */}
        <Camera />
      </Suspense>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
