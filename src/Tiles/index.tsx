import React, { Children } from 'react'
import { View, ViewProps } from 'react-native'

import { Stack } from '../Stack'
import { lastFactory, splitEvery, directionOf, styles } from '../utils'
import { useSpacing, useDebugStyle } from '../context'

interface Props {
  children: React.ReactNode
  columns: number
  space?: number
  style?: ViewProps['style']
  testID?: ViewProps['testID']
}

export const Tiles = (props: Props) => {
  const { children, columns, space = 0, style, testID } = props
  const arr = splitEvery(columns, Children.toArray(children))
  const margin = useSpacing(space)
  const filledColumns = new Array(columns)
  const debugStyle = useDebugStyle()

  return (
    <Stack space={space} style={style} testID={testID}>
      {arr.map((innerChildren, index) => {
        const filledArray = filledColumns.fill(null).map((x, y) => innerChildren[y] || x)
        const isLast = lastFactory(filledArray)

        return (
          <View style={[styles.fullWidth, directionOf('row')]} key={index}>
            {filledArray.map((child, innerIndex) => {
              return (
                <View
                  style={[
                    styles.flexFluid,
                    child && debugStyle,
                    isLast(innerIndex) ? styles.noMarginRight : { marginRight: margin },
                  ]}
                  key={innerIndex}
                >
                  {child}
                </View>
              )
            })}
          </View>
        )
      })}
    </Stack>
  )
}