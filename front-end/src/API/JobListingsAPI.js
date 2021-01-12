//API can only handle 25 calls a minute 250 a day
//
export const getJobListings = async (input) => {
  let result = []
  const response = await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=453b7316&app_key=d76ec9d9469cf676a0c200f8e768c7ce&results_per_page=5&what=${input.jobTitle}&location0=us`)
  const data = await response.json();

  let dataLen = data['results'].length

  for (let i = 0; i < 5; i++){
    if (i >= dataLen){
      break
    }
    result.push(data['results'][i])
  }
  return result
}