import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Registration, UsersList } from './src/pages'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Splashscreen />
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
          <Stack.Screen name="UsersList" component={UsersList} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;