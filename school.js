const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};
//  problem 10 [ countCalculation ]

function countCalculation(school) {
  return {
    mathTeachersCount: school.departments.math.teachers,
    historyTeachersCount: school.departments.history.teachers,
    mathStudentsCount: school.departments.math.students,
    historyStudentsCount: input.departments.history.students,
  };
}

console.log(countCalculation(school));

//  Problem 11 [ findTopStuden ]
function findTopStudent(school, courseName) {
  let topStudent = null;
  let topScore = -1;

  for (const student of school.students) {
    const { scores } = student;
    if (scores[courseName] > topScore) {
      topScore = scores[courseName];
      topStudent = student;
    }
  }

  return topStudent;
}

console.log(findTopStudent(school, "math"));

// Problem 12 [  addNewDept ]
const addNewDept = (school, newDepartment) => {
  const updatedDepartments = { ...school.departments, ...newDepartment };
  return { ...school, departments: updatedDepartments };
};

const newDepartment = { hindi: { teachers: 4, students: 110 } };
console.log(addNewDept(school, newDepartment));

//  Problem 13 [ highestStudentCountDepartment ]
const highestStudentCountDepartment = ({ departments }) => {
  let maxStudents = -1;
  let deptWithMaxStudents = "";

  for (const [dept, { students }] of Object.entries(departments)) {
    if (students > maxStudents) {
      maxStudents = students;
      deptWithMaxStudents = dept;
    }
  }

  return deptWithMaxStudents;
};

console.log(highestStudentCountDepartment(school));

//  Problem 14 [ Greeting Message ]
const generateGreeting = (name, language = "English") => {
  const greetings = {
    English: `Hello, ${name}!`,
    Spanish: `¡Hola, ${name}!`,
    French: `Bonjour, ${name}!`,
  };

  return greetings[language] || greetings["English"];
};

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
