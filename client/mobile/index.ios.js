/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Dimensions, View } from 'react-native'
var {height, width} = Dimensions.get('window')
import { Container, Header, Title, Button, Footer, Content,
          Left, Right, Body, Icon, Text,
          Form, Item, Input} from 'native-base'
import MapView from 'react-native-maps'

export default class mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        username: ""
    }
  }
  signIn() {
    var that = this;
    return fetch("http://localhost:4000/auth/identity/callback", {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: that.state.email,
        password: that.state.password
      })
    })
    .then((res) => { return res.json() })
    .then((res) => {
      that.setState({username: res.data.username})
    })
    .catch((err) => {
      console.warn(err)
    })
  }
  render() {
    if (this.state.username) {
      return (
        <Container
          style={{position: 'relative', height: 500}}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </Container>
      )
    }
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon name='arrow-back' />
                  </Button>
              </Left>
              <Body>
                  <Title>SpotitApp</Title>
              </Body>
              <Right>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Right>
          </Header>
          <Content>
              <Form>
                  <Item>
                      <Input placeholder="Email" onChangeText={(text) => this.setState({email:text})} />
                  </Item>
                  <Item last>
                      <Input placeholder="Password" onChangeText={(text) => this.setState({password:text})} />
                  </Item>
              </Form>
              <Button block success onPress={() => this.signIn()}>
                  <Text>Sign In</Text>
              </Button>
          </Content>
          <Footer>
          </Footer>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  map: {
    left:0,
    right: 0,
    top:0,
    bottom: 0,
    position: 'absolute'
  }
})

AppRegistry.registerComponent('mobile', () => mobile);
