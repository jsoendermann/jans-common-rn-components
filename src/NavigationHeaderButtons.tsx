import * as React from 'react'
import { TextProperties, TouchableOpacityProperties } from 'react-native'
import { StyledComponentClass } from 'styled-components'
import styled from 'styled-components/native'


export interface NavigationButtonProps {
  side: string
}
export const NavigationButton = styled.TouchableOpacity`
  margin-left: ${(p: NavigationButtonProps) => p.side === 'left' ? '18' : '0'};
  margin-right: ${(p: NavigationButtonProps) => p.side === 'right' ? '18' : '0'};
  width: 50;
`

export interface HeaderButtonTextProps {
  side: string
}
export const NavigationButtonText = styled.Text`
  background-color: transparent;
  font-family: Bitter;
  color: white;
  font-size: 17;
  text-align: ${(p: HeaderButtonTextProps) => p.side};
`


export const LeftHamburgerMenuNavigationHeaderText = styled.Text`
  background-color: transparent;
  font-weight: bold;
  color: white;
  font-size: 22;
  text-align: left;
  margin-top: -1;
`

export interface LeftHamburgerMenuNavigationHeaderButtonProps {
  onPress: () => void
}
export const LeftHamburgerMenuNavigationHeaderButton = ({ onPress }: LeftHamburgerMenuNavigationHeaderButtonProps) => (
  <NavigationButton side="left" onPress={onPress}>
    <LeftHamburgerMenuNavigationHeaderText>
      ☰
    </LeftHamburgerMenuNavigationHeaderText>
  </NavigationButton>
)
