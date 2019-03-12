import React from 'react';
import { Header as NativeBaseHeader, Left, Body, Right, Icon, Title, Button, Text } from 'native-base';
import { StatusBar, View, } from 'react-native'
import styles from './styles'

class Header extends React.Component {
  renderBackButton = () => {
    return (
      <Button style={styles.button} transparent onPress={this.props.onPressBack}>
        <Icon name='arrow-back' style={styles.icon} />
      </Button>
    )
  }

  renderConfigButton = () => {
    return (
      <Button style={styles.button} transparent onPress={this.props.onPressConfig}>
        <Icon name={this.props.configIcon} style={styles.icon}/>
      </Button>
    )
  }

  renderNotificationButton = () => {
    return (
      <Button style={styles.button} transparent onPress={this.props.onPressNotification}>
        <Icon name={'ios-mail-outline'} style={[styles.icon, styles.notificationIcon]}/>
        {this.props.notificationsUnreadTotal > 0 && <View style={styles.bagdge}><Text style={styles.bagdgeText}>{this.props.notificationsUnreadTotal}</Text></View>}
      </Button>
    )
  }

  renderConfigTextButton = () => {
    return(
      <Button style={styles.button} transparent onPress={this.props.onPressTextButton}>
        <Text style={styles.navText}>{this.props.configTypeText}</Text>
      </Button>
    )
  }

  render() {
    return (
      <NativeBaseHeader style={[styles.container, styles[`${this.props.theme}Theme`]]}>
        <View>
          <StatusBar translucent barStyle="light-content" />
        </View>
        <Left style={styles.left}>
          {!this.props.customLeftSide && this.props.displayBack && this.renderBackButton()}
          {!this.props.customLeftSide && this.props.displayLeftConfig && this.props.displayConfig && this.props.configType === 'Button' && this.renderConfigButton()}
          {!this.props.customLeftSide && this.props.displayLeftConfig && this.props.displayConfig && this.props.configType === 'Text' && this.renderConfigTextButton()}
          {this.props.customLeftSide ? this.props.customLeftSide() : null}
        </Left>
        <Body>
          <Title
            style={styles.title}>
              {this.props.title}
          </Title>
        </Body>
        <Right style={styles.right}>
          {!this.props.customRightSide && this.props.displayRightNotification && this.props.displayConfig && this.props.configType === 'Button' && this.renderNotificationButton()}
          {!this.props.customRightSide && !this.props.displayLeftConfig && this.props.displayConfig && this.props.configType === 'Button' && this.renderConfigButton()}
          {!this.props.customRightSide && !this.props.displayLeftConfig && this.props.displayConfig && this.props.configType === 'Text' && this.renderConfigTextButton()}
          {this.props.customRightSide ? this.props.customRightSide() : null}
        </Right>
      </NativeBaseHeader>
    )
  }
}

export default Header