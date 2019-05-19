import React from 'react'
import Events from './constants'
import { ThemeProvider } from 'styled-components'

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { theme: props.initalTheme }
  }

  componentDidMount() {
    const { channel } = this.props
    channel.on(Events.UPDATE, this.onThemeChange)
  }

  componentWillUnmount() {
    const { channel } = this.props
    channel.removeListener(Events.UPDATE, this.onThemeChange)
  }

  onThemeChange = theme => {
    this.setState({ theme })
  }

  render() {
    const { theme } = this.state
    const { children } = this.props

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
}

Wrapper.defaultProps = {
  initialTheme: {}
}

export default Wrapper
