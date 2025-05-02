import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";

import {Routes} from './src/routes'

export default function App() {
  const sheme = useColorScheme();
  return (
    <NavigationContainer theme={sheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Routes/>
    </NavigationContainer>
  )
}