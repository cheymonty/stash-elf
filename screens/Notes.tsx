import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Title } from 'react-native-paper';

export default function Notes() {

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Stash Elf"/>
      </Appbar.Header>

      <Title>My Notes</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
