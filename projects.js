function randomColour () {
  return `rgb(${
    Math.random() * 256 | 0
  }, ${
    Math.random() * 256 | 0
  }, ${
    Math.random() * 256 | 0
  })`
}

function randomGradient () {
  return `linear-gradient(${
    Math.random() * 360
  }deg, ${
    randomColour()
  }, ${
    randomColour()
  })`
}

const projectNames = [
  '文档名称', // project
  '文档名称', // my project
  '文档名称', // a program
  '文档名称', // video game
  '文档名称', // JavaScript
  '文档名称', // game
]

function createProject () {
  const project = document.createElement('a')
  project.className = 'project'
  project.href = '#'

  const thumbnail = document.createElement('div')
  thumbnail.className = 'project-thumbnail'
  thumbnail.style.backgroundImage = randomGradient()

  const name = document.createElement('span')
  name.className = 'project-name'
  name.textContent = projectNames[Math.random() * projectNames.length | 0]

  const desc = document.createElement('span')
  desc.className = 'project-desc'
  desc.textContent = projectNames[Math.random() * projectNames.length | 0]

  project.append(thumbnail, name, desc)

  return project
}

const projectsWrapper = document.getElementById('projects')
while (projectsWrapper.firstChild) {
  projectsWrapper.removeChild(projectsWrapper.firstChild)
}

for (let i = 0; i < 30; i++) {
  projectsWrapper.append(createProject())
}
