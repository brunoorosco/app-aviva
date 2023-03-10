import Header from './src/components/Header'
import Toast from 'react-native-toast-message'
import { Routes } from './src/routes'
import { StatusBar } from 'react-native'

export default function App() {
  // const Camera = lazy(() => import('./src/pages/QrCode'))
  return (
    <>
      <StatusBar />
      <Header name="Usuário Teste" />
      <Toast />
      <Routes />
    </>
  )
}
