import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ title, style, ...props }) => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity {...props} style={[buttonStyle, style]}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#8385a3',
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#6B7794',
    paddingVertical: 20,
  },
})

export default Button
