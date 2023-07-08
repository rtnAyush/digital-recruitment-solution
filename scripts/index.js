const data = [
    {
        name: "Ayush Kumar",
        role: "Web Developer",
        location: "Remote",
        gender: 'm',
    },
    {
        name: "Rajesh Kumar",
        role: "Software Developer",
        location: "Bangalore",
        gender: 'm',
    },
    {
        name: "Priya Sharma",
        role: "Data Scientist",
        location: "Mumbai",
        gender: 'f',
    },
    {
        name: "Amit Patel",
        role: "Product Manager",
        location: "Delhi",
        gender: 'm',
    },
    {
        name: "Neha Singh",
        role: "UX Designer",
        location: "Hyderabad",
        gender: 'f',
    },
    {
        name: "Rahul Gupta",
        role: "Marketing Executive",
        location: "Kolkata",
        gender: 'm',
    },
    {
        name: "Sneha Joshi",
        role: "Software Engineer",
        location: "Pune",
        gender: 'f',
    },
    {
        name: "Mohammed Khan",
        role: "Business Analyst",
        location: "Chennai",
        gender: 'm',
    },
    {
        name: "Anjali Verma",
        role: "HR Manager",
        location: "Ahmedabad",
        gender: 'f',
    },
    {
        name: "Vikram Mehta",
        role: "Finance Analyst",
        location: "Jaipur",
        gender: 'm',
    },
    {
        name: "Shalini Gupta",
        role: "Graphic Designer",
        location: "Chandigarh",
        gender: 'f',
    },
    {
        name: "Aakash Singh",
        role: "IT Support Specialist",
        location: "Lucknow",
        gender: 'm',
    }
];

// import data from "./data";

const colorBox = ['#FFE1CB', '#D5F6ED', '#E2DBF9', '#E0F3FF', '#FBE2F3', '#EEF0F4']
const applicantContainer = document.querySelector("[data-applicant-container]");
const applicantTemplate = document.querySelector("[data-applicant-template]");
const search = document.querySelector("[data-search]");


const newData = data.map((obj, idx) => {
    const bodyRow = applicantTemplate.content.cloneNode(true).children[0];

    const bgColor = bodyRow.querySelector('[data-bg-color]');
    const bgImg = bodyRow.querySelector('[data-img]');
    const count = bodyRow.querySelector('[data-count]');
    const name = bodyRow.querySelector('[data-name]');
    const role = bodyRow.querySelector('[data-role]');
    const location = bodyRow.querySelector('[data-location]');

    if (obj.gender === 'm') {
        bgImg.src = '/../img/man.svg';
    } else {
        bgImg.src = '/../img/women.svg';
    }
    bgColor.style.backgroundColor = colorBox[idx % 6];
    count.textContent = `#${idx + 1}`;
    name.textContent = obj.name;
    role.textContent = obj.role;
    location.textContent = obj.location;

    applicantContainer.append(bodyRow);

    return {
        ...obj,
        element: bodyRow,
    }
})

search.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();

    newData.forEach((obj, idx) => {
        const isVisible = obj.location.toLowerCase().includes(val);

        obj.element.classList.toggle("hide", !isVisible);
    })
})

