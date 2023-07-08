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

const colorBox = ['#FFE1CB', '#D5F6ED', '#E2DBF9', '#E0F3FF', '#FBE2F3', '#EEF0F4'];

const applicantContainer = document.querySelector("[data-applicant-container]");
const applicantTemplate = document.querySelector("[data-applicant-template]");

const search = document.querySelector("[data-search]");
const option = document.querySelector("[data-option]");


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
});

let opt = 'role';

option.addEventListener('change', e => {
    opt = e.target.value;
})

search.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();

    newData.forEach((obj, idx) => {
        let isVisible;

        if (opt === 'role') {
            isVisible = obj.role.toLowerCase().includes(val);
        } else if (opt === 'location') {
            isVisible = obj.location.toLowerCase().includes(val);
        } else {
            isVisible = obj.name.toLowerCase().includes(val);
        }

        obj.element.classList.toggle("hide", !isVisible);

    })
})


// const addToShortList = (button) => {
//     const card = button.closest('.card');


//     const count = card.querySelector('.count').textContent;
//     const role = card.querySelector('.role').textContent;
//     const name = card.querySelector('.name').textContent;
//     const imgUrl = card.querySelector('.gender-img').getAttribute('src');
//     const location = card.querySelector('.location').textContent;

//     const newData = localStorage.getItem('selectedData');
//     if (newData) {
//         localStorage.setItem('selectedData', [...newData, {
//             count,
//             role,
//             name,
//             imgUrl,
//             location,
//         }]);
//     } else {
//         localStorage.setItem('selectedData', [{
//             count,
//             role,
//             name,
//             imgUrl,
//             location,
//         }]);
//     }
// }

// console.log(localStorage.getItem('selectedData'));

// // const selected

// localStorage.getItem('selectedData').forEach((obj, idx) => {
//     const bodyRow = applicantTemplate.content.cloneNode(true).children[0];

//     const bgColor = bodyRow.querySelector('[data-bg-color]');
//     const bgImg = bodyRow.querySelector('[data-img]');
//     const count = bodyRow.querySelector('[data-count]');
//     const name = bodyRow.querySelector('[data-name]');
//     const role = bodyRow.querySelector('[data-role]');
//     const location = bodyRow.querySelector('[data-location]');

//     if (obj.gender === 'm') {
//         bgImg.src = '/../img/man.svg';
//     } else {
//         bgImg.src = '/../img/women.svg';
//     }
//     bgColor.style.backgroundColor = colorBox[idx % 6];
//     count.textContent = `#${idx + 1}`;
//     name.textContent = obj.name;
//     role.textContent = obj.role;
//     location.textContent = obj.location;

//     applicantContainer.append(bodyRow);

//     return {
//         ...obj,
//         element: bodyRow,
//     }
// });