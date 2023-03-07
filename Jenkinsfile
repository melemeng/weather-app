pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/melemeng/weather-app', branch: 'main')
      }
    }

    stage('NPM install') {
      steps {
        sh 'npm install'
      }
    }

  }
}