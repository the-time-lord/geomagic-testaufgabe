export const hasMatchingName = (contact, searchQuery) => {
  const contactNameLowerCase = contact.name.toLowerCase();
  const searchQueryLowerCase = searchQuery.toLowerCase();

  return contactNameLowerCase.startsWith(searchQueryLowerCase);
};
