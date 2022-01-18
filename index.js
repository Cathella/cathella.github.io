const projects = [
  {
    id: "project-8",
    name: "Pomodoro",
    github: "https://github.com/Cathella/pomodoro",
    live: "",
    imgsrc: "img/timer.png",
    technologies: ['ReactJS', 'HTML', 'CSS'],
    description: "The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.",
    milestones: [
      'Initialize React app.',
      'Add React Redux (npm install react-redux) to it.',
      'Structure the application files using a "feature folder" approach and used the ducks pattern for the Redux files.',
      'Add React Router to set s and s for the apps navigation.',
      'Display the list of books with a remove button.',
      'Add a form for adding a book.',
      'Add Categories component displaying "Under construction" text only.',
      'Configure Redux store and create a booksReducer with actions.',
      'Use redux-logger to check if the application is working correctly on the console logs.',
      'Implement adding and removing a book in the components.',
      'Connect the React-Redux application to an existing API',
      'Add books to the API',
      'Remove books from the API',
      'Style the application according to the design provided in ZeplinStyle the application according to the design provided in Zeplin.',
    ]
  },
  {
    id: "project-7",
    name: "Book Store",
    github: "https://github.com/Cathella/book-store",
    live: "https://github.com/Cathella/book-store",
    imgsrc: "img/bookstore.png",
    technologies: ['ReactJS', 'HTML', 'CSS', 'Webpack', 'Linters'],
    description: "Bookstore is a books website with features to display a list of books, add a book and remove a selected book from an API",
    milestones: [
      'Initialize React app.',
      'Add React Redux (npm install react-redux) to it.',
      'Structure the application files using a "feature folder" approach and used the ducks pattern for the Redux files.',
      'Add React Router to set s and s for the apps navigation.',
      'Display the list of books with a remove button.',
      'Add a form for adding a book.',
      'Add Categories component displaying "Under construction" text only.',
      'Configure Redux store and create a booksReducer with actions.',
      'Use redux-logger to check if the application is working correctly on the console logs.',
      'Implement adding and removing a book in the components.',
      'Connect the React-Redux application to an existing API',
      'Add books to the API',
      'Remove books from the API',
      'Style the application according to the design provided in ZeplinStyle the application according to the design provided in Zeplin.',
    ]
  },
  {
    id: "project-6",
    name: "Math Magicians",
    github: "https://github.com/Cathella/math-magicians",
    live: "https://math-magicians-nakitto.netlify.app/",
    imgsrc: "img/magicians.png",
    technologies: ['ReactJS', 'HTML', 'CSS', 'Webpack', 'Linters'],
    description: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: - make simple calculations and read a random math-related quote.",
  },
  {
    id: "project-5",
    name: "Quizzy",
    github: "https://github.com/Cathella/QuizzApp",
    live: "https://cathella.github.io/QuizzApp/dist/",
    imgsrc: "img/quizzy.png",
    technologies: ['JavaScript', 'HTML', 'CSS', 'Webpack', 'Open Trivia DB API'],
    description: "A Quiz app that loads questions from the open trivia db API and uses event listeners to capture the users answers to them.",
  },
  {
    id: "project-4",
    name: "Food Mood",
    github: "https://github.com/Cathella/JavaScript-Group-Capstone",
    live: "https://laughing-hodgkin-321112.netlify.app/",
    imgsrc: "img/foodmood.png",
    technologies: ['JavaScript', 'HTML', 'CSS', 'Webpack', 'Bootstrap 5'],
    description: "This is my JavaScript capstone project. It is a web application based on an external API. The selected API provides data about different recipes. The webapp has two interfaces. A home page showing a list of items that you can like and A popup window with more data about an item that you can use to comment on the item.",
  },
  {
    id: "project-3",
    name: "LeaderBoard App",
    github: "https://github.com/Cathella/leaderBoard",
    live: "https://amazing-almeida-714d03.netlify.app/",
    imgsrc: "img/leaderboard.png",
    technologies: ['JavaScript', 'HTML', 'CSS', 'Webpack', 'Linters'],
    description: "In this project I create a new game using an API. I Implement the Refresh button (receiving data from the API and parsing the JSON) and the form Submit button (sending data to the API). I use the async and await JavaScript features to consume the API.",
  },
  {
    id: "project-2",
    name: "To Do List App",
    github: "https://github.com/Cathella/to-do-list",
    live: "https://cathella.github.io/to-do-list/dist/",
    imgsrc: "img/todo.png",
    technologies: ['JavaScript', 'HTML', 'CSS', 'Webpack',],
    description: "In this project, I build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.",
  },
  {
    id: "project-1",
    name: "Awesome Books",
    github: "https://github.com/Cathella/BooksApp",
    live: "https://cathella.github.io/BooksApp/",
    imgsrc: "img/books.png",
    technologies: ['JavaScript', 'HTML', 'CSS',],
    description: "Building a single page application using JavaScript classes, methods and DOM manipulation.",
  },
];


document.getElementById("myProjects").innerHTML = projects.map(project => 
  `
  <div class="col-md-6 col-lg-4 mb-5">
    <div class="text-center position-relative">
      <div>
        <img src="${project.imgsrc}" alt="${project.name}"  class="img-fluid" />
      </div>
      <div class="position-absolute arrow-pos shadow bg-fair">
        <a href="${project.live}" target="_blank" class="text-white">
          <i class="fas fa-lg fa-arrow-up text-white rotated-arrow"></i>
        </a>
      </div>
    </div>
    <div class="d-flex mt-4">
      <a href="${project.github}" target="_blank" class="btn btn-warning me-3 rounded-0"><i class="fab fa-github"></i></a>
      <a href="${project.live}" target="_blank" class="btn border rounded-0 me-3 border-warning text-warning"><i class="fas fa-arrow-up text-warning rotated-arrow"></i></a>
      <a class="btn me-3 text-white rounded-0 border" data-bs-toggle="modal" data-bs-target="#${project.id}">${project.name}</a>
    </div>
    <div class="modal fade" id="${project.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content bg-fair">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${project.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <img src="${project.imgsrc}" alt="${project.name}"  class="img-fluid" />
            </div>
            <div class="mt-5">
              <h5>Project Technologies:</h5>
              ${project.technologies.join(', ')}
            </div>
            <div class="mt-5">
              <h5>About the Project:</h5>
              ${project.description}
            </div>
          </div>
          <div class="modal-footer">
          <a href="${project.github}" target="_blank" class="btn btn-warning me-3 rounded-0"><i class="fab fa-github"></i> Github Link</a>
          <a href="${project.live}" target="_blank" class="btn border rounded-0 me-3 border-warning text-warning"><i class="fas fa-arrow-up text-warning rotated-arrow"></i> Live Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
).join('');

const count = document.getElementById("projectCounter").textContent = projects.length;
