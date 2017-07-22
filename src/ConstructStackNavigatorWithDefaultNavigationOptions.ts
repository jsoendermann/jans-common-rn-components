import {
  StackNavigator,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation'
import { merge } from 'lodash'

export const ConstructStackNavigatorWithDefaultNavigationOptions = (
  defaultStackNavigationOptions: any,
) => (routeConfigMap: NavigationRouteConfigMap, stackConfig: any = {}) =>
  StackNavigator(
    routeConfigMap,
    merge(stackConfig, { navigationOptions: defaultStackNavigationOptions }),
  )
