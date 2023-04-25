import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface IButtonProps {
    title:  string;
    onPress: () => void;
    testID?: string;
};

const Button = ({title, onPress, testID}: IButtonProps) => {
  return (
    <TouchableOpacity testID={testID} style={styles.button} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 56,
    }
})