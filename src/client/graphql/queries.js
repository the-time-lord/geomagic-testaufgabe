import { gql } from '@apollo/client';

export const GET_CONTACTS = gql`
  query GetContacts($name: String) {
    contacts(name: $name) {
      letter
      entries {
        name
        phone
      }
    }
  }
`;
