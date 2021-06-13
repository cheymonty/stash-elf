import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Home() {
  return (
    <View style={styles.container}>
        <Appbar.Header>
            <Appbar.Content title="Stash-Elf"/>
        </Appbar.Header>
        <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
