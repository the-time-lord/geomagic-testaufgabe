export const typeDefs = `#graphql
  type PhoneBookEntry {
    name: String
    phone: String
  }

  type PhoneBookGroup {
    letter: String
    entries: [PhoneBookEntry]
  }

  type Query {
    contacts(name: String): [PhoneBookGroup]
  }
`;
