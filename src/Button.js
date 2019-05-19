import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({ theme, active, setTheme }) => (
  <TouchableOpacity
    style={{
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      padding: 10,
      marginHorizontal: 10,
      marginVertical: 5,
      backgroundColor: active ? '#22cc22' : 'white'
    }}
    onPress={() => setTheme(theme)}
  >
    <Text style={{ textAlign: 'center' }}>{theme.name}</Text>
  </TouchableOpacity>
)

export default Button
