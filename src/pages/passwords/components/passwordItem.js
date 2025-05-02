import React from "react";
import { Text, StyleSheet, Pressable, useColorScheme } from "react-native";

export function PasswordItem({ data, removePassword }) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        {data}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
  }
});
