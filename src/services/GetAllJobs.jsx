const GetAllJobs = async () => {
  try {
    const response = await fetch(
      "job-portal-production-1bac.up.railway.app",
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
