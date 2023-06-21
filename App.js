import { useContext, useEffect } from 'react'
import { NavigationContainer, createNavigationContainerRef, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initializeApp } from '@firebase/app';
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from './src/config/firebase-config';
import { HouseSimple, User, PlusCircle } from 'phosphor-react-native';

import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext'
// import { Provider as PostProvider, Context as PostContext, } from './src/context/PostContext'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import NewOperation from './src/screens/NewOperation';
import Profile from './src/screens/Profile';
import { THEME } from './src/theme';
import { MainNavigator } from './src/navigations';
const navigationRef = createNavigationContainerRef()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: THEME.COLORS.TEXTPRIMARY,
  },
}

function App() {
  const app = initializeApp(firebaseConfig)

  const { id, isLogged, userName, tryLocalLogin } = useContext(AuthContext)

  useEffect(() => {
    tryLocalLogin && tryLocalLogin()
  }, [])
 
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        {isLogged ?
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                switch (route.name) {
                  case 'MainNavigator':
                    return (
                      <HouseSimple weight='fill' size={size} color={color} />
                    )
                  case 'NewOperation':
                    return (
                      <PlusCircle weight='fill' size={size} color={color} />
                    )
                  case 'Profile':
                    return (
                      <User weight='fill' size={size} color={color} />
                    )
                }
              },
              headerShown: false,
              tabBarShowLabel: false,
              tabBarInactiveTintColor: THEME.COLORS.BLACK,
              tabBarActiveTintColor: THEME.COLORS.PRIMARY,
            })}
          >
            {/* <Tab.Screen name="MainNavigator" component={MainNavigator} options={{
              unmountOnBlur: true,
            }} /> */}
            {/* { <Tab.Screen name="Friends" component={Friends} options={{
              unmountOnBlur: true,
            }} /> */}

            <Tab.Screen name='MainNavigator' component={MainNavigator} options={{
              unmountOnBlur: true,
            }} />

            <Tab.Screen name="NewOperation" component={NewOperation} initialParams={{value: 'Renda'}} options={{
              unmountOnBlur: true,
            }} />

            <Tab.Screen name="Profile" component={Profile} options={{
              unmountOnBlur: true,
            }} />

          </Tab.Navigator>
          :
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        }
      </NavigationContainer>

    </SafeAreaProvider>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}