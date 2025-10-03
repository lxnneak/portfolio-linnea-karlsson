import "./App.css"

function App() {
  return (
    <>
      <div className="intro">
        <div>
          <h3>Hello, I'm</h3>
          <h1>Linnéa Karlsson</h1>
          <p>
            An aspiring fullstack developer dreaming about making the world a
            better place.
          </p>
          <p>
            Take a look around to see some of the projects that I've worked on!
          </p>
        </div>
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQFM4fjIUPXABQ/profile-displayphoto-shrink_800_800/B4DZcMVNtYGcAg-/0/1748258578120?e=1762387200&v=beta&t=8Ti-i7w7ikFOma27Q1lYaVgiCKsp5L5M-RZCMN04TCg"></img>
      </div>

      <h1>Featured projects</h1>
      <div className="projects">
        <div className="card">
          <h3>
            <a
              href="https://github.com/lxnneak/java-b-projektuppgift"
              target="_blank"
            >
              Burglar Game
            </a>
          </h3>
          <p>
            Java console game where the player has to defend themselves from a
            burglar inside their home
          </p>
        </div>

        <div className="card">
          <h3>
            <a
              href="https://github.com/tHaraldsson/spring-todo-service"
              target="_blank"
            >
              Spring Todo Service
            </a>
          </h3>
          <p>
            RESTful API made with Spring Boot that lets the user manage their
            tasks
          </p>
        </div>

        <div className="card">
          <h3>
            <a href="https://github.com/davidlkarlsson/Balanza" target="_blank">
              Balanza
            </a>
          </h3>
          <p>
            Web app that challenges the user to not spend money during the
            weekdays
          </p>
        </div>
      </div>
      <div>
        <h1>Technical skills</h1>
        <div className="skillset">
          <p className="skill">Java</p>
          <p className="skill">Spring Boot</p>
          <p className="skill">React</p>
          <p className="skill">Typescript</p>
          <p className="skill">HTML</p>
          <p className="skill">CSS</p>
          <p className="skill">SQL</p>
          <p className="skill">Git</p>
        </div>
      </div>
    </>
  )
}

export default App
