const GetAllJobs = async () => {
  try {
    const response = await fetch(
      "http://localhost:3001/jobs",
      {
        method: "Get",
      }
    );
    const jobs = await response.json();
    return jobs;
  } catch (error) {
    console.error("Error fetching remote OK job", error);
  }
};

// console.log(jobs);

export default GetAllJobs;
