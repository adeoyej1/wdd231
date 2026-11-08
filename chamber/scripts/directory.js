const membersContainer = document.querySelector("#members");
const memberCount = document.querySelector("#member-count");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

let currentMembers = [];

const membershipNames = {
  1: "Member",
  2: "Silver Member",
  3: "Gold Member"
};

function createMemberCard(member) {
  const article = document.createElement("article");
  article.className = "member-card";

  const image = document.createElement("img");
  image.src = `images/${member.image}`;
  image.alt = `${member.name} logo`;
  image.width = 320;
  image.height = 180;
  image.loading = "lazy";

  const content = document.createElement("div");
  content.className = "member-card-content";

  const heading = document.createElement("h2");
  heading.textContent = member.name;

  const category = document.createElement("p");
  category.className = "member-category";
  category.textContent = member.category;

  const address = document.createElement("p");
  address.textContent = `Address: ${member.address}`;

  const phone = document.createElement("p");
  phone.textContent = `Phone: ${member.phone}`;

  const description = document.createElement("p");
  description.className = "member-description";
  description.textContent = member.description;

  const website = document.createElement("a");
  website.href = member.website;
  website.textContent = "Visit website";
  website.target = "_blank";
  website.rel = "noopener noreferrer";
  website.setAttribute("aria-label", `Visit the ${member.name} website (opens in a new tab)`);

  const level = document.createElement("span");
  level.className = "level";
  if (member.membershipLevel === 3) level.classList.add("gold");
  if (member.membershipLevel === 2) level.classList.add("silver");
  level.textContent = membershipNames[member.membershipLevel] ?? "Member";

  content.append(heading, category, address, phone, description, website, level);
  article.append(image, content);
  return article;
}

function displayMembers(members) {
  membersContainer.replaceChildren();

  if (!members.length) {
    const message = document.createElement("p");
    message.className = "status-message";
    message.textContent = "No chamber members are available at this time.";
    membersContainer.append(message);
    return;
  }

  const fragment = document.createDocumentFragment();
  members.forEach((member) => fragment.append(createMemberCard(member)));
  membersContainer.append(fragment);
  memberCount.textContent = `${members.length} chamber members`;
}

function setView(view) {
  const isGrid = view === "grid";
  membersContainer.classList.toggle("member-grid", isGrid);
  membersContainer.classList.toggle("member-list", !isGrid);
  gridButton.setAttribute("aria-pressed", String(isGrid));
  listButton.setAttribute("aria-pressed", String(!isGrid));
}

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) {
      throw new Error(`Could not load member data (${response.status}).`);
    }
    currentMembers = await response.json();
    if (!Array.isArray(currentMembers)) {
      throw new Error("The member data must be a JSON array.");
    }
    displayMembers(currentMembers);
    setView("grid");
  } catch (error) {
    membersContainer.replaceChildren();
    const message = document.createElement("p");
    message.className = "status-message";
    message.textContent = "The member directory could not be loaded. Please run this page using VS Code Live Server and check that data/members.json exists.";
    membersContainer.append(message);
    memberCount.textContent = "Directory unavailable";
    console.error("Directory loading error:", error);
  } finally {
    membersContainer.setAttribute("aria-busy", "false");
  }
}

gridButton.addEventListener("click", () => setView("grid"));
listButton.addEventListener("click", () => setView("list"));

getMembers();
