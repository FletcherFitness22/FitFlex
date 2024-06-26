import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      email
      username
      password
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
