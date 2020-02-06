import React from "react";
import Flex, { FlexItem } from "./styled";
import CardBox from "./components/card";

export default () => (
  <Flex row wrap center>
    <FlexItem>
      <CardBox
        title={"1"}
        caption={"Hallo"}
        buttonText={"Log In"}
        linkText={"already have account"}
      />
    </FlexItem>
    <FlexItem basis={1}>
      <CardBox
        title={"2"}
        caption={"No way"}
        buttonText={"Log In"}
        linkText={"already have account"}
      />
    </FlexItem>
    <FlexItem schrink={1}>
      <CardBox
        title={"3"}
        caption={"Just see"}
        buttonText={"Log In"}
        linkText={"already have account"}
      />
    </FlexItem>
    <FlexItem>
      <CardBox
        title={"4"}
        caption={"you got it"}
        buttonText={"Log In"}
        linkText={"already have account"}
      />
    </FlexItem>
    <FlexItem>
      <CardBox
        title={"5"}
        caption={"now, chill"}
        buttonText={"Log In"}
        linkText={"already have account"}
      />
    </FlexItem>
  </Flex>
);
