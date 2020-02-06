import React from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardButton,
  CardLink
} from "../styled/card_style";

const CardBox = props => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>{props.title}</CardHeading>
      </CardHeader>

      <CardBody>
        <CardFieldset>
          <CardOptionsNote>{props.caption}</CardOptionsNote>
        </CardFieldset>

        <CardFieldset>
          <CardButton type="button">{props.buttonText}</CardButton>
        </CardFieldset>

        <CardFieldset>
          <CardLink>{props.linkText}</CardLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default CardBox;
