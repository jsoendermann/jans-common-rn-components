import * as React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProperties,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native'

export interface TouchableWithPressedStyleProps
  extends TouchableWithoutFeedbackProperties {
  normalStyle?: ViewStyle
  pressedStyle?: ViewStyle
}

export interface TouchableWithPressedStyleState {
  isPressed: boolean
}

export class TouchableWithPressedStyle extends React.Component<
  TouchableWithPressedStyleProps,
  TouchableWithPressedStyleState
> {
  state = { isPressed: false }

  onPressIn = (event: GestureResponderEvent) => {
    this.setState({ isPressed: true })
    this.props.onPressIn && this.props.onPressIn(event)
  }

  onPressOut = (event: GestureResponderEvent) => {
    this.setState({ isPressed: false })
    this.props.onPressOut && this.props.onPressOut(event)
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onPress={this.props.onPress}
      >
        <View
          style={[
            this.props.style,
            this.state.isPressed
              ? this.props.pressedStyle
              : this.props.normalStyle,
          ]}
        >
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
