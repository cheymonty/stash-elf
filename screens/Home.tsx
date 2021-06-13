import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Title, Dialog, Portal, Button, TextInput } from 'react-native-paper';

export default function Home() {
  const [firstBoot, setFirstBoot] = useState(true);
  const [name, setName] = useState("");


  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Stash Elf"/>
      </Appbar.Header>

      <Portal>
        <Dialog visible={firstBoot} dismissable={false}>
          <Dialog.Title>Hi! I'm Your Helper Elf. What Would You Like Me to Call You?</Dialog.Title>

          <Dialog.Content>
            <TextInput label="Name" value={name} onChangeText={text => setName(text)}/>
          </Dialog.Content>

          <Dialog.Actions>
            <Button disabled={name.length === 0 ? true : false} onPress={() => setFirstBoot(false)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>


      <Title>{name}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
