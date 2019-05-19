import React, { Component } from 'react'
import { View } from 'react-native'
import Events from './constants'
import Button from './Button'

class ThemePanel extends Component {
  state = { themes: [], activeId: 0 }

  componentDidMount() {
    const { channel } = this.props

    this.onSet = channel.on(Events.SET, themes => {
      this.setState({ themes })
    })

    this.onUnset = channel.on(Events.RESET, () => {
      this.setState({ themes: [] })
    })
  }

  componentWillUnmount() {
    const { channel } = this.props
    channel.removeListener(Events.SET, this.onSet)
    channel.removeListener(Events.RESET, this.onUnset)
  }

  update = id => theme => {
    const { channel } = this.props
    channel.emit(Events.UPDATE, theme)
    this.setState({ activeId: id })
  }

  render() {
    const { active } = this.props
    const { themes = [], activeId } = this.state

    if (!active || !themes.length) {
      return null
    }

    return (
      <View>
        {themes.map((theme, id) => {
          const { name } = theme
          return (
            <View key={name}>
              <Button
                theme={theme}
                setTheme={this.update(id)}
                active={activeId === id}
              />
            </View>
          )
        })}
      </View>
    )
  }
}

export default ThemePanel
