/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Container, Header, Title, Button, Footer, Content,
          Left, Right, Body, Icon, Text,
          Form, Item, Input} from 'native-base'

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
              <Text>Render Map Here</Text>
            </Content>
            <Footer>
            </Footer>
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

AppRegistry.registerComponent('mobile', () => mobile);
