import styled from "styled-components/native";

export const Container = styled.View`
  background: #e7e7e7;
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #c4c4c4;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#333"
})`
  flex: 92;
  height: 40px;
  background: #fff;
  border-radius: 4px;
  padding: 0 15px;
  margin-right: 10px;
  border: 1px solid #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  flex: 8;
  color: #fff;
  background-color: #7159c1;
  padding: 0 12px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;
