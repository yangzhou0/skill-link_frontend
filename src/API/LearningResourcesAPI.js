const BASE_URL = 'https://skill-link-backend.herokuapp.com/skill_link/learning_resources/'
const findLearningResources = async (searchObject) => {
  let jobObject = {
    'job_title':searchObject.job_title,
    'zipcode':searchObject.zipcode
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
  findLearningResources
};
