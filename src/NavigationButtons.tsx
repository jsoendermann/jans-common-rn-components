import * as React from 'react'
import { TextProperties, TouchableOpacityProperties } from 'react-native'
import { StyledComponentClass } from 'styled-components'
import styled from 'styled-components/native'

export interface NavigationButtonProps {
  side: string
}
export const NavigationButton = styled.TouchableOpacity`
  margin-left: ${(p: NavigationButtonProps) =>
    p.side === 'left' ? '18' : '0'};
  margin-right: ${(p: NavigationButtonProps) =>
    p.side === 'right' ? '18' : '0'};
  width: 100;
`

export interface HeaderButtonTextProps {
  side: string
}
export const NavigationButtonText = styled.Text`
  background-color: transparent;
  font-size: 17;
  text-align: ${(p: HeaderButtonTextProps) => p.side};
`
