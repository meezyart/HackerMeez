import styled from "styled-components";

export const StoryWrapper = styled.div`
  display: flex;
  padding: 0.25em 1em;
  align-items: start;
  color: #828282;
`;

export const RankWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: end;
  min-width: 2.5em;
`;

export const VoteButton = styled.div`
  font-size: 0.7em;
  margin: 2px 7px 0 2px;
  cursor: pointer;
`;

export const LinkWrapper = styled.span`
  font-size: ${props => (props.size ? props.size : ".8em")}
  a {
    margin: 0 0.2em;
    cursor: pointer;
    text-decoration: none;
    color: ${props => (props.color ? props.color : "#828282")};
    &:hover {
      text-decoration: underline;
    }
    &:first-of-type {
      margin-left: 0;
    }
  }
`;