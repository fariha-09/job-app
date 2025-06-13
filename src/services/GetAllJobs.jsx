const GetAllJobs = async () => {
  try {
    const response = await fetch(
      "https://job-portal-production-1bac.up.railway.app/jobs",
      {
        method: "GET", // Use all uppercase GET
      }
    );
    const jobs = await response.json();
    return jobs;
  } catch (error) {
    console.error("Error fetching remote OK job", error);
  }
};

export default GetAllJobs;
