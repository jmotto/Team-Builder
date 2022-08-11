// create Manager card
const generateManager = function (manager) {
  return `
    <div class="row-col-md-4 mb-4">
        <div class="card h-100" >
            <div class="card-header text-center">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${manager.id}</li>
                    <li class="list-group-item email">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item officeNumber">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
           

        </div>
    </div>
    `;
};

// create Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="row-col-md-4 mb-4">
        <div class="card h-100">
            <div class="card-header  text-center">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${engineer.id}</li>
                    <li class="list-group-item email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>

        </div>
    </div>
    `;
};

// create Intern card
const generateIntern = function (intern) {
  return `
    <div class="row-col-md-4 mb-4">
        <div class="card h-100">
            <div class="card-header  text-center">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card"">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${intern.id}</li>
                    <li class="list-group-item email">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item school">School: ${intern.school}</li>
                </ul>
            </div>

           
    </div>
</div>
    `;
};

// push array to page
generateHTML = (data) => {
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManager(employee);

      cardArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      cardArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      cardArray.push(internCard);
    }
  }
  // joining strings
  const employeeCards = cardArray.join("");

  // return to generated page
  const generateTeam = generateTeamProfile(employeeCards);
  return generateTeam;
};

// generate HTML file
const generateTeamProfile = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">

        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-4 h1 w-100 text-center" id="navbar-text">Meet the Team</span>
          </nav>
      </header>
      <main>
          <div class="card container">
              <div class="card row justify-content-center flex" id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    </html>
    `;
};

// export
module.exports = generateHTML;
