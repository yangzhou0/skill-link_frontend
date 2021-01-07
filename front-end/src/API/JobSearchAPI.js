const BASE_URL = 'http://127.0.0.1:8000/skill_link/job_to_skills/' 
const searchByJob = async (uuid) => {
  let jobObject = {
    'uuid':uuid
  }
  let response = await fetch(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(jobObject)
  });
  let data = await response.json();
  return data
};


export {
  searchByJob
};
