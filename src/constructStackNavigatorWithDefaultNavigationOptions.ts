import { StackNavigator, NavigationContainer, NavigationRouteConfigMap } from 'react-navigation'
import { merge } from 'lodash'

export const constructStackNavigatorWithDefaultNavigationOptions = (
  defaultStackNavigationOptions: any,
) => (routeConfigMap: NavigationRouteConfigMap, stackConfig: any = {}) =>
  StackNavigator(
    routeConfigMap,
    merge({}, { navigationOptions: defaultStackNavigationOptions }, stackConfig),
  )
