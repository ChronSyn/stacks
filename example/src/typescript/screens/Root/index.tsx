import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { StacksProvider, Grid } from '@mobily/stacks'
import { Profile } from '../../screens/Profile'
import { Playground } from '../../screens/Playground'

import {
  StackSpace1,
  StackSpace2,
  StackSpace3,
  StackAlign1,
  StackAlign2,
  StackAlign3,
} from '../../screens/Docs/Stack'
import {
  ColumnsSpace1,
  ColumnsSpace2,
  ColumnsSpace3,
  ColumnsAlignY1,
  ColumnsAlignY2,
  ColumnsAlignX1,
  ColumnsAlignX2,
} from '../../screens/Docs/Columns'
import { Tiles1, Tiles2 } from '../../screens/Docs/Tiles'
import { InlineSpace1, InlineSpace2, InlineAlign1, InlineAlign2 } from '../../screens/Docs/Inline'
import { GridContent, Grid1, Grid2, Grid3 } from '../../screens/Docs/Grid'
import { Box1 } from '../../screens/Docs/Box'
import { FillView1 } from '../../screens/Docs/FillView'

export const Root = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StacksProvider spacing={4} debug={true}>
        <SafeAreaView>
          {/* <Profile /> */}
          <Playground />
          {/* <StackSpace1 /> */}
          {/* <StackSpace2 /> */}
          {/* <StackSpace3 /> */}
          {/* <StackAlign1 /> */}
          {/* <StackAlign2 /> */}
          {/* <StackAlign3 /> */}
          {/* <ColumnsSpace1 /> */}
          {/* <ColumnsSpace2 /> */}
          {/* <ColumnsSpace3 /> */}
          {/* <ColumnsAlignY1 /> */}
          {/* <ColumnsAlignY2 /> */}
          {/* <ColumnsAlignX1 /> */}
          {/* <ColumnsAlignX2 /> */}
          {/* <Tiles1 /> */}
          {/* <Tiles2 /> */}
          {/* <InlineSpace1 /> */}
          {/* <InlineSpace2 /> */}
          {/* <InlineAlign1 /> */}
          {/* <InlineAlign2 /> */}
          {/* <GridContent paddingX={4} space={8} /> */}
          {/* <Box1 /> */}
        </SafeAreaView>
        {/* <FillView1 /> */}
        {/* <Grid margin={4} gutter={2} columns={8} opacity={0.2} /> */}
        {/* <Grid1 /> */}
        {/* <Grid2 /> */}
        {/* <Grid3 /> */}
      </StacksProvider>
    </>
  )
}
