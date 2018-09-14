// location of action creators for project
export const selectLibrary = (libraryId) => {
  return {
    // object w/ type property is action and how to update the data that they produce
    type: 'select_library',
    payload: libraryId
  };
};
