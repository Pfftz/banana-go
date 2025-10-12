pipeline {
    agent {
        docker {
            image 'node:22-alpine'
            // Run as uid 1000 to match typical Jenkins workspace ownership.
            args '-u 1000:1000'
            reuseNode true
        }
    }
    options {
        timestamps()
        // If you also want retention in code (optional, you already set it in UI):
        // buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    environment {
        NEXT_TELEMETRY_DISABLED = '1'
        CI = 'true'
        // Belt and suspenders: both forms; npm reads npm_config_* reliably
        npm_config_cache = "${WORKSPACE}/.npm-cache"
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm-cache"
    }
    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                checkout scm
            }
        }
        stage('Versions') {
            steps {
                sh 'node -v && npm -v'
            }
        }
        stage('Install') {
            steps {
                // Force cache to workspace and ensure the dir exists
                sh '''
                  set -e
                  mkdir -p ".npm-cache"
                  npm config set cache "$(pwd)/.npm-cache" --location=project
                  npm config get cache
                  npm ci --cache "$(pwd)/.npm-cache" --no-audit --no-fund
                '''
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint --cache "$(pwd)/.npm-cache"'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build --cache "$(pwd)/.npm-cache"'
            }
        }
    }
    post {
        success { echo 'Build succeeded.' }
        failure { echo 'Build failed.' }
    }
}
