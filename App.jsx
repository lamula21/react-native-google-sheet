import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './pages/Home'
import { FormScreen } from './pages/FormScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline' // Use the Ionicons names for the icons
    } else if (route.name === 'Form') {
      iconName = focused ? 'clipboard' : 'clipboard-outline' // Customize these icons based on your preferences
    }
    return <Ionicons name={iconName} size={size} color={color} />
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  tabBarStyle: [
    {
      display: 'flex'
    },
    null
  ]
})

export default function App () {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Form' component={FormScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
