import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Pill from './screens/Pill';
import Notes from './screens/Notes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Tab.Navigator
          tabBarOptions={{
            style: {borderTopWidth: 0, elevation: 0},
            activeTintColor: "#00ff00",
            showLabel: false,
          }}>
          <Tab.Screen 
            name="Pills" 
            component={Pill}
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="pill" size={25} style={{color: focused? "#00ff00" : "#087"}}/>
              ),
            }}
          />
          <Tab.Screen 
            name="Notes" 
            component={Notes}
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="notebook-outline" size={25} style={{color: focused? "#00ff00" : "#087"}}/>
              ),
            }}
          />
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

