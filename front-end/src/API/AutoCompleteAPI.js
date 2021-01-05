const BASE_URL = '' // call autocomplete API from Django
const getAutoCompleteResults = async (input) => {
  const response = await fetch(`${BASE_URL}/${input}`);
  const data = await response.json();
  return data;
};


export {
  getAutoCompleteResults
};
