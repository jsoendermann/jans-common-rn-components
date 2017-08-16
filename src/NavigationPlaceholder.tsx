import { ViewProperties, Text } from 'react-native'
import { StyledComponentClass } from 'styled-components'
import styled from 'styled-components/native'

import { ExpandingCenteringView, Button } from '.'

export const NavigationPlaceholder = (title: string, routes: string[]) => ({
  navigation,
}: any) =>
  <ExpandingCenteringView>
    <Title>
      {title}
    </Title>
    {routes.map(routeName =>
      <Button
        key={routeName}
        title={routeName}
        onPress={() => navigation.navigate(routeName)}
      />,
    )}
  </ExpandingCenteringView>

const Title = styled.Text`
  margin-bottom: 40;
  font-size: 24;
`
