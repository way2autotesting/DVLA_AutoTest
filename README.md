#selenium-cucumber-java

##Selenium-cucumber : Automation Testing Using Java
######BDD- Behavioral Driven Development is based on Test Driven Development (TDD) and it aims to bridge the gap between Business analyst and developers

##prerequisite
######Setup and configure the BDD Test Automation Solution on your local machine:`
```
1. Java SDK                 
2. IntellJ IDEA
3. Maven
4. Cucumber
5. Selenium WebDriver
```

##Writing a new scenario test
######The feature files go in the feature package and shall have an extension ".feature" 
```
You can start out by looking at features/vehicleRegistrationNumber.feature. 
You can extend this feature or make your own features using some of the predefined 
steps that come with selenium-cucumber.
```
Feature file snapshot: ![Alt Text](..//DVLA/snaps/first.png)

##Running test
######Go to your package directory called runner and execute the class 'CucumberRunner.java' 
Runner class snapshot: ![Alt Text](..//DVLA/snaps/second.png)

##Documentation
######Base class
```
Base libraries are considered as the heart and soul of our framework,
since there exist all libraries required by our automation test to execute.
For instance, the object for Selenium Webdriver is created only here
```

######ExcelUtil class
```
Excel Helper
Act as library to read Data from Excel sheet, parse Data and store Data in-memory collections
We are using any external libraries (3rd party)
JXL In-Memory-
HashTable
```

######LocalDriverContext class
```
Because, all our existing code in framework are static variable and static method, even WebDriver is static
A static variable is common to all the instances (or object) of the class because it is a class level variable.
In other words you can say that only a single copy of static variable is created and shared among all the instances of the class.
Memory allocation for such variables only happens once when the class is loaded in the memory. (
i.e. create one driver instance means that will only shared across lifecycle of the framework)
     
create a non-static webdriver/remote webdriver to SPAWN multiple webdriver request from our code and
then this webdriver is going to send multiple request to the selenium server so that it can open multiple browser to start multple test parallel
```

######Hooks class 
```
TestInitialize class - is most important class as it performs the following functions:
1. Initialize all java libraries and closing of the browser
2. Ensures feature files trigger test results posted to test rail 
```
Runner class snapshot: ![Alt Text](..//DVLA/snaps/third.png)

######Cucumber Reports 
```
Cucumber has a built in report generation whereby Feature files tested are automatically written 
to cucumbers own reporting system
```
Reporting: ![Alt Text](..//DVLA/snaps/fourth.png)

######Object properties 
properties file snapshot: ![Alt Text](..//DVLA/snaps/five.png)

##


