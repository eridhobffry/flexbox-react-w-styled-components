import styled from "styled-components";
import is from "styled-is";

export default styled.div`
  order: 0;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  display: block;
  ${is("inlineBlock")`
    display: inline-block;
  `};
  ${is("inlineFlex")`
    display: inline-flex;
  `};
  ${is("flex")`
    display: flex;
  `};
  /********************************** order **********************************/
  ${is("order")`
    order: ${props => props.order};
  `}
  /******************************** flex-basis ********************************/
  ${is("basis")`
    flex-basis: ${props => props.basis};
  `}
  /******************************** flex-grow ********************************/
  ${is("grow")`
    flex-grow: ${props => props.grow};
  `}
  /******************************* flex-shrink *******************************/
  ${is("shrink")`
    flex-shrink: ${props => props.shrink};
  `}
    ${is("noShrink")`
    flex-shrink: 0;
  `};
`;
