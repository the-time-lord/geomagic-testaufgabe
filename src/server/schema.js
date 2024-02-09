export const typeDefs = `#graphql
  type PhoneBookEntry {
    name: String
    phone: String
  }

  type PhoneBookGroup {
    letter: String
    entries: [PhoneBookEntry]
  }

  type ContactsQueryResponse {
    results: [PhoneBookGroup]
    total: Int
  }

  type Query {
    contacts(name: String): ContactsQueryResponse
  }
`;
