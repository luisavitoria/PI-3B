import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Context as AuthContext } from '../context/AuthContext'
import Home from '../screens/Home';
import NewOperation from '../screens/NewOperation';

const Stack = createStackNavigator();

export const MainNavigator = () => {
    const { userName, tryLocalLogin } = useContext(AuthContext)

    useEffect(() => {
      tryLocalLogin && tryLocalLogin()
    }, [])

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" children={(props) => <Home userName={userName} {...props} />} />
            <Stack.Screen name="NewOperation" children={(props) => <NewOperation {...props} />} /> 
        </Stack.Navigator>
    )
}

