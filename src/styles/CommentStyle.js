import styled from "styled-components";

export const AddCommentBox = styled.div`
  display:flex;
  align-items:start;
  flex-direction: column;
  margin-left: 1.3em;
  margin-bottom: 1em;
  button {
    display:block;
    margin-top: 1em;
    margin-bottom: 3em;
  }
`;

export const CommentWrapper = styled.div`
  margin-top: 1.2em;
  line-height: 1.3;
  font-size: 0.8rem;
`;

export const CommentHeaderWrapper = styled.div`
  display: flex;
  color: #828282;
  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 0.6rem;
  }
  .vote-btn {
    margin-top: 0.2em;
  }
`;

export const CommentChildren = styled.div`
  margin-top: 0.1em;
  margin-left: 3em;
`;

export const CommentParent = styled.div`
  margin-top: 0.3em;
  padding-top: 0.3em;
  padding-right: 2em;
  padding-left: 1.4em;
`;
