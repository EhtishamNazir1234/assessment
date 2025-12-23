export const courses = [
  {
    id: "1",
    title: "React Fundamentals",
    instructor: "Ehtisham Nazir",
    duration: "6 weeks",
    enrolled: 1234,
  },
  {
    id: "2",
    title: "Next.js Basics",
    instructor: "Ali Ahmad",
    duration: "8 weeks",
    enrolled: 987,
  },
  {
    id: "3",
    title: "TypeScript Deep Dive",
    instructor: "Muhammad Afaq",
    duration: "5 weeks",
    enrolled: 756,
  },
];

export const getCourses = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return courses;
};

export const getCourseById = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return courses.find((course) => course.id === id);
};
