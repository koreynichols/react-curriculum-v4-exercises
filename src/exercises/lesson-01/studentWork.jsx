//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Korey Nichols';
  const age = '37';
  const hobbies = [
    { id: 1, title: 'Fishing' },
    { id: 2, title: 'Gaming' },
    { id: 3, title: 'Sports' },
    { id: 4, title: 'Web Development' },
  ];
  return (
    <div>
      <h1>About {name}</h1>
      <p>
        Hi, welcome to my page. My name is {name}. I am {age} years old from
        California. My hobbies include:
      </p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </div>
  );
}
