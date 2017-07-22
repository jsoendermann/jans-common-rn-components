import {
  StackNavigator,
  NavigationRouteConfigMap,
  NavigationScreenConfig,
  NavigationStackScreenOptions,
} from 'react-navigation'
import { merge } from 'lodash'

const ConstructStackNavigatorWithDefaultNavigationOptions = (
  defaultStackNavigationOptions: NavigationScreenConfig<
    NavigationStackScreenOptions
  >,
) => (routeConfigMap: NavigationRouteConfigMap, stackConfig: any = {}) =>
  StackNavigator(
    routeConfigMap,
    merge(stackConfig, { navigationOptions: defaultStackNavigationOptions }),
  )
