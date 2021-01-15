export const getJobsListingsFromForm = async (input) => {
  let formatedInput = { "SKAValueList": [] }
  for (let key in input){
    formatedInput["SKAValueList"].push({"ElementId": key, "DataValue": input[key]})
  }
  let stringedInput = JSON.stringify(formatedInput)

  let result = []
  const response = await fetch('https://api.careeronestop.org/v1/skillsmatcher/KoOHjcliipPqZjU', {
    method: 'POST',
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Authorization': 'Bearer PXLMIYub6Jigq6O7eNyfvlPWkEI1occwo0heJBn2sS3SNQIfjF7bLkY5mpW/5tx+wOqH71s7vTPUOF1ZZ1fr/Q==',
      'Content-Type': 'application/json'
    },
  body: stringedInput
  })

  const data = await response.json();
  // console.log(data)
  // let dataLen = data['SKAValueList'].length

  // for(let i=0; i<5; i++) {
  //   if (i >= dataLen){
  //     break
  //   }
  //   result.push(data['SKAValueList'][i])
  // }
  result.push(data)
  return result
}