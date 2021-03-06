import React from 'react'
import { View, ViewProps } from 'react-native'

import { styles } from './styles'

interface Props {
  width?: number | string
  height?: number | string
  style?: ViewProps['style']
  children?: React.ReactNode
}

export const Placeholder = (props: Props) => {
  const { width, height = 100, style, children } = props

  return <View style={[styles.root, { width, height }, style]}>{children}</View>
}
