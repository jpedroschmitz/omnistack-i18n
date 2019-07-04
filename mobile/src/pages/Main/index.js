import React, { Component } from "react";
import {
  Container,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText
} from "./styles";

export default class Main extends Component {
  static navigationOptions = {
    title: "Usuários"
  };

  state = {
    newUser: "",
    users: []
  };

  componentDidMount() {}

  render() {
    const { newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Qual o seu nome?"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
          />
          <SubmitButton>
            <SubmitButtonText>+</SubmitButtonText>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
