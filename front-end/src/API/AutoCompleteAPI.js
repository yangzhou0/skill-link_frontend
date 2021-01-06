const BASE_URL = 'http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=' 
const getAutoCompleteResults = async (input) => {
  let result = []
  if (!input){ // empty input, will return no autocomplete 
    return result
  }
  const response = await fetch(`${BASE_URL}${input}`);
  const data = await response.json();
  if (data.error){
    return result
  }
  let dataLen = data.length

  for (let i = 0; i < 10; i++){ // return only first ten responses
    if (i >= dataLen){ // break if there is less than 10 responses
      break;
    }
    result.push(data[i]['suggestion'])
  }
  return result;
};


export {
  getAutoCompleteResults
};
