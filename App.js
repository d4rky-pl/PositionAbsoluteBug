import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from "./dropdown";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown open={open} value={value} onChange={setValue} options={[
        { label: 'Option 1', value: 'option1', testID: 'Option:1' },
        { label: 'Option 2', value: 'option2', testID: 'Option:2' },
        { label: 'Option 3', value: 'option3', testID: 'Option:3' },
      ]} placeholder="Select an option" testID="Dropdown" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outer: {
    width: 200,
    height: 20,
    backgroundColor: '#005b96'
  },
  inner: {
    position: 'absolute',
    top: 25,
    left: 0,
    width: 200,
    height: 400,
    backgroundColor: '#6497b1'
  }
});
