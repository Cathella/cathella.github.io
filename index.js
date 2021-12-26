const projects = [
  {
    id: "project-1",
    name: "Awesome Books",
    github: "https://github.com/Cathella/BooksApp",
    live: "https://cathella.github.io/BooksApp/",
    imgsrc: "img/books.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima corporis natus nihil itaque, iste numquam labore placeat. Fugit rerum reiciendis quos porro quasi non aspernatur saepe, consequuntur alias eum.",
  },
  {
    id: "project-2",
    name: "To Do List App",
    github: "https://github.com/Cathella/to-do-list",
    live: "https://cathella.github.io/to-do-list/dist/",
    imgsrc: "img/todo.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima corporis natus nihil itaque, iste numquam labore placeat. Fugit rerum reiciendis quos porro quasi non aspernatur saepe, consequuntur alias eum.",
  },
  {
    id: "project-3",
    name: "LeaderBoard App",
    github: "https://github.com/Cathella/leaderBoard",
    live: "https://amazing-almeida-714d03.netlify.app/",
    imgsrc: "img/leaderboard.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima corporis natus nihil itaque, iste numquam labore placeat. Fugit rerum reiciendis quos porro quasi non aspernatur saepe, consequuntur alias eum.",
  },
  {
    id: "project-4",
    name: "Food Mood",
    github: "https://github.com/Cathella/JavaScript-Group-Capstone",
    live: "https://laughing-hodgkin-321112.netlify.app/",
    imgsrc: "img/foodmood.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima corporis natus nihil itaque, iste numquam labore placeat. Fugit rerum reiciendis quos porro quasi non aspernatur saepe, consequuntur alias eum.",
  },
  {
    id: "project-5",
    name: "Quizzy",
    github: "https://github.com/Cathella/QuizzApp",
    live: "https://cathella.github.io/QuizzApp/dist/",
    imgsrc: "img/quizzy.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima corporis natus nihil itaque, iste numquam labore placeat. Fugit rerum reiciendis quos porro quasi non aspernatur saepe, consequuntur alias eum.",
  },
  {
    id: "project-6",
    name: "Math Magicians",
    github: "https://github.com/Cathella/math-magicians",
    live: "https://math-magicians-nakitto.netlify.app/",
    imgsrc: "img/magicians.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima corporis natus nihil itaque, iste numquam labore placeat. Fugit rerum reiciendis quos porro quasi non aspernatur saepe, consequuntur alias eum.",
  },
  {
    id: "project-7",
    name: "Book Store",
    github: "https://github.com/Cathella/book-store",
    live: "https://github.com/Cathella/book-store",
    imgsrc: "img/bookstore.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima corporis natus nihil itaque, iste numquam labore placeat. Fugit rerum reiciendis quos porro quasi non aspernatur saepe, consequuntur alias eum.",
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
            <div class="mt-4">
            ${project.description}
            </div>
          </div>
          <div class="modal-footer">
          <a href="${project.github}" target="_blank" class="btn btn-warning me-3 rounded-0"><i class="fab fa-github"></i> Github</a>
          <a href="${project.live}" target="_blank" class="btn border rounded-0 me-3 border-warning text-warning"><i class="fas fa-arrow-up text-warning rotated-arrow"></i> Live Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
).join('');

const count = document.getElementById("projectCounter").textContent = projects.length;
