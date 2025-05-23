
let currentPage = 1;
const jobListEl = document.getElementById("job-listings");
const loadMoreBtn = document.getElementById("load-more");

async function fetchJobs(page = 1) {
  const url = `https://api.joinrise.io/api/v1/jobs/public?page=${page}&limit=10&sort=desc&sortedBy=createdAt`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.jobs && data.jobs.length > 0) {
      data.jobs.forEach(job => {
        const jobItem = document.createElement("div");
        jobItem.className = "job-item";
        jobItem.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Company:</strong> ${job.company || 'N/A'}</p>
          <p><strong>Location:</strong> ${job.jobLocation || 'Remote/Not specified'}</p>
          <p><strong>Posted:</strong> ${new Date(job.createdAt).toLocaleDateString()}</p>
          <a href="${job.jobLink}" target="_blank">View Job</a>
        `;
        jobListEl.appendChild(jobItem);
      });
    } else {
      loadMoreBtn.style.display = "none";
      if (page === 1) jobListEl.innerHTML = "<p>No jobs found.</p>";
    }
  } catch (error) {
    console.error("Failed to load jobs:", error);
    jobListEl.innerHTML = "<p>Error loading jobs.</p>";
  }
}

loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  fetchJobs(currentPage);
});

// Load first page on initial load
fetchJobs();

function addComment() {
  alert("Feature coming soon: Add a comment to this API.");
}

function addShowcase() {
  alert("Feature coming soon: Submit a project that uses this API.");
}

function subscribe() {
  const email = document.querySelector('.subscribe input').value;
  if (email) {
    alert(`Subscribed with ${email}`);
  } else {
    alert("Please enter your email.");
  }
}
