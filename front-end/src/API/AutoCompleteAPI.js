const BASE_URL = 'http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=' 
const getAutoCompleteResults = async (input) => {
  const response = await fetch(`${BASE_URL}${input}`);
  const data = await response.json();
  let result = []
  console.log('data',data)
  if (data.error){
    return result
  }
  let dataLen = data.length
  for (let i = 0; i < 10; i++){
    if (i >= dataLen){
      break;
    }
    result.push(data[i]['suggestion'])
  }
  return result;
};


export {
  getAutoCompleteResults
};
