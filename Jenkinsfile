pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/melemeng/weather-app', branch: 'main')
      }
    }

    stage('Clone') {
      steps {
        sh 'git clone https://github.com/melemeng/weather-app'
      }
    }

  }
}