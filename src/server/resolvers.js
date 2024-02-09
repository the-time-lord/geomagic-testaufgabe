import { readFile } from 'node:fs/promises';
import { hasMatchingName } from './utills/index.js';
import groupBy from 'lodash/groupBy.js';

const fileUrl = new URL('./telefonbuch.json', import.meta.url);
const phoneBook = JSON.parse(await readFile(fileUrl, 'utf8'));

export const resolvers = {
  Query: {
    contacts(_parent, args) {
      const { name = '' } = args;
      const sortedResults = phoneBook
        .filter((contact) => hasMatchingName(contact, name))
        .sort((a, b) => a.name.localeCompare(b.name));
      const groupedResults = groupBy(sortedResults, (c) =>
        c.name.charAt(0).toUpperCase()
      );

      return Object.entries(groupedResults).map(([letter, entries]) => ({
        letter,
        entries,
      }));
    },
  },
};
