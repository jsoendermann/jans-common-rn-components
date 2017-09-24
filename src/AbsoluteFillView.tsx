import * as React from 'react'
import { View, ViewStyle, StyleSheet } from 'react-native'

export interface AbsoluteFillViewProps {
  style?: ViewStyle
  children?: any
}
export const AbsoluteFillView = ({
  style,
  children,
}: AbsoluteFillViewProps) => (
  <View
    style={{
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    }}
  >
    {children}
  </View>
)
