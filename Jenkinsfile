node {

   def mvn = tool (name: 'Maven', type: 'maven') + '/bin/mvn'

    stage('SCM Checkout'){
	    git 'https://github.com/chandreshmaithil/sapient-test-boot.git'
   }

   stage('Compile-Package'){
	   sh "${mvn} package"
   }
}