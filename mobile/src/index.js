import React from "react";
import { StatusBar } from "react-native";
import Routes from "./routes";

export default () => {
  return (
    <>
      <StatusBar backgroundColor="#e7e7e7" barStyle="dark-content" />
      <Routes />
    </>
  );
};
