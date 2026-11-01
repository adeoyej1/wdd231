/*
 * Certificate courses. Confirm the completed values against your own transcript.
 * The initial values are false so that no course is incorrectly claimed as completed.
 * Course data is kept in one array; cards, filters and credits are generated from it.
 */
const courses = [
  { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: false },
  { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: false },
  { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: false },
  { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: false },
  { subject: "WDD", number: 231, title: "Web Frontend Development I", credits: 2, completed: false },
  { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: false }
];

const courseList = document.querySelector("#course-list");
const creditTotal = document.querySelector("#credit-total");
const filterButtons = document.querySelectorAll(".filter-button");

function displayCourses(courseData) {
  if (!courseList || !creditTotal) return;

  courseList.replaceChildren();

  if (courseData.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No courses found for this selection.";
    courseList.append(message);
  }

  courseData.forEach((course) => {
    const card = document.createElement("article");
    card.className = course.completed ? "course-card completed" : "course-card";

    const heading = document.createElement("h3");
    heading.textContent = `${course.subject} ${course.number}: ${course.title}`;

    const credits = document.createElement("p");
    credits.textContent = `${course.credits} credit hours`;

    const status = document.createElement("span");
    status.className = "course-status";
    status.textContent = course.completed ? "Completed" : "Not completed";

    card.append(heading, credits, status);
    courseList.append(card);
  });

  const totalCredits = courseData.reduce((total, course) => total + course.credits, 0);
  creditTotal.textContent = totalCredits;
}

function setCourseFilter(filter) {
  const filteredCourses = filter === "all"
    ? courses
    : courses.filter((course) => course.subject === filter);

  filterButtons.forEach((button) => {
    const isSelected = button.dataset.filter === filter;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  displayCourses(filteredCourses);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setCourseFilter(button.dataset.filter));
});

displayCourses(courses);
