const projects = [
  {
    name: "Awesome Books",
    github: "https://github.com/Cathella/BooksApp",
    live: "https://cathella.github.io/BooksApp/",
    imgsrc: "img/books.png",
  },
  {
    name: "To Do List App",
    github: "https://github.com/Cathella/to-do-list",
    live: "https://cathella.github.io/to-do-list/dist/",
    imgsrc: "img/todo.png",
  },
  {
    name: "LeaderBoard App",
    github: "https://github.com/Cathella/leaderBoard",
    live: "https://amazing-almeida-714d03.netlify.app/",
    imgsrc: "img/leaderboard.png",
  },
  {
    name: "Food Mood",
    github: "https://github.com/Cathella/JavaScript-Group-Capstone",
    live: "https://laughing-hodgkin-321112.netlify.app/",
    imgsrc: "img/foodmood.png",
  },
  {
    name: "Quizzy",
    github: "https://github.com/Cathella/QuizzApp",
    live: "https://cathella.github.io/QuizzApp/dist/",
    imgsrc: "img/quizzy.png",
  },
  {
    name: "Math Magicians",
    github: "https://github.com/Cathella/math-magicians",
    live: "https://math-magicians-nakitto.netlify.app/",
    imgsrc: "img/magicians.png",
  },
  {
    name: "Book Store",
    github: "https://github.com/Cathella/book-store",
    live: "https://github.com/Cathella/book-store",
    imgsrc: "img/bookstore.png",
  },
];

document.getElementById("myProjects").innerHTML = projects.map(project => 
  `
  <div class="col-md-6 col-lg-4 mb-5">
    <!-- <div class="bg-fair project todo-app mb-4 text-center position-relative"> -->
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
      <a href="" class="btn me-3 text-white rounded-0 border">${project.name}</a>
    </div>
  </div>
  `
).join('');

const count = document.getElementById("projectCounter").textContent = projects.length;
