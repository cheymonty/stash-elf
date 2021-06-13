import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './screens/Home';

export default function App() {
  return (
    <PaperProvider>
      <Home/>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

