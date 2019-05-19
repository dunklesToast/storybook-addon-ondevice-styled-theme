import React from 'react'
import addons, { makeDecorator } from '@storybook/addons'
import { View } from 'react-native'

import Events from './constants'
import Wrapper from './Wrapper'

export const withTheme = makeDecorator({
  name: 'withTheme',
  parameterName: 'themes',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { parameters }) => {
    const data = parameters || []
    const themes = Array.isArray(data) ? data : Object.values(data)

    if (themes.length !== 0) {
      addons.getChannel().emit(Events.SET, themes)
    } else {
      return <View>{getStory(context)}</View>
    }

    return (
      <Wrapper initalTheme={themes[0]} channel={addons.getChannel()}>
        {getStory(context)}
      </Wrapper>
    )
  }
})
