import * as React from 'react'
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native'
import styled from 'styled-components/native'

export interface ButtonProps {
  onPress: () => void
  title: string
  style?: ViewStyle
  textStyle?: TextStyle
  color?: string
  disabled?: boolean
}
export const Button = ({
  onPress,
  title,
  style,
  textStyle,
  color,
  disabled,
}: ButtonProps) =>
  <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
    <Text
      style={[
        { fontSize: 19, textAlign: 'center' },
        textStyle ? textStyle : {},
        color ? { color } : {},
        disabled ? { color: '#aaa' } : {},
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
