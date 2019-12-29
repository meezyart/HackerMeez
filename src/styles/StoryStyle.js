import styled from "styled-components";

export const StoryWrapper = styled.div`
  display: flex;
  padding: 0.25em 0;
  align-items: start;
  color: #828282;
  margin-bottom: 0.2em;
`;

export const RankWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: end;
`;

export const VoteButton = styled.div`
  font-size: 0.7em;
  color: #828282;
  margin: .5em .7em 0 .2em;
  cursor: pointer;
`;

export const LinkWrapper = styled.span`
  font-size: ${props => (props.size ? props.size : ".8em")}
  a,button {
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
