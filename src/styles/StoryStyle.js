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
  min-width: ${props => (props.showRank || `2.7em` )};
`;

export const VoteButton = styled.div`
  font-size: 0.7em;
  color: #828282;
  margin-right: .7em;
  margin-left: .2em;
  margin-top: ${props => (props.small ? `.2em` : `.5em`)};
  cursor: pointer;
`;

export const LinkWrapper = styled.span`
  font-size: ${props => (props.large ? `1rem` : `0.75rem`)};
  a,button {
    margin: 0 0.2em;
    cursor: pointer;
    color: ${props => (props.primary ? `#262421` : `#828282`)};
    text-decoration: none;
    &:visited{
      color:#828282
    }
    &:hover {
      text-decoration: underline;
    }
    &:first-of-type {
      margin-left: 0;
    }
  }
`;
