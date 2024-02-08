import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFile } from 'node:fs/promises';

const fileUrl = new URL('./telefonbuch.json', import.meta.url);
const phoneBook = JSON.parse(await readFile(fileUrl, 'utf8'));

const typeDefs = `#graphql

  type PhoneBook {
    name: String
    phone: String
  }

  type Query {
    contacts: [PhoneBook]
  }

`;

const resolvers = {
  Query: {
    contacts: () => phoneBook,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
