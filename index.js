<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question Page</title>
    <link rel="stylesheets" href="/styles.css">
    <script>
        var countDownTimer;
        var timerInterval;
        var arrayOfQuestions = [];
        const maxTime = 5 * 60; //time is in seconds
        function setCountDownTimer() {
            countDownTimer = maxTime;
        }
        
        //When the person clicks the begin button the timer starts
        //start time
        timerInterval = setInterval(updateTimer, 1000);

        function updateTimer() {  
            countDownTimer = countDownTimer - 1;
        }
        //question is asked
        function SetupQuestions() {
            console.log("SetupQuestions started");
            let question1 = {
                id: "quest0",
                question: "To select elements with a specific class: ",
                answer1: "write a semicolon (;) character, followed by the class",
                answer2: "write a period (.) character, followed by the class name",
                answer3: "write a period (.) character",
                answer4: "write a comma (,) character",
                correctAnswer: 2
            };

            let question2 = {
                id:"quest1",
                question: "In CSS, a color can be specificed by using a predefined color name.",
                answer1: "yes",
                answer2: "no",
                answer3: null,
                answer4: null,
                correctAnswer: 1
            };

            arrayOfQuestions.push(question1);
            arrayOfQuestions.push(question2);

            console.log("SetupQuestions arrayOfQuestions: ", arrayOfQuestions);

        }

        function nextQuestion() {
            for(let i = 0; i<arrayOfQuestions.length; i++) {
                
            }
        }

        function showQuestion(questionindex) {
            let questionSection = document.getElementById('question');
            let newQuestion = document.createElement('div');
            newQuestion.id = arrayOfQuestions[questionindex].id;
            newQuestion.innerText = arrayOfQuestions[questionindex].question;
            questionSection.appendChild()
        }





        //if question is correct next question 
        
        //if question is incorrect time penalty
        //if answer is correct show points and then go to the next question
        //Once all questions have been answered give options
        //Once all questions have been answered give options to save score
        //If user chooses to save score show the scoreboard
    </script>
</head>

<body>
    <div class="welcome">
        <span style="text-align:left">Time Remaining:</span>
        <span style="text-align:right">Score:</span>
    </div>


    <div>
        <div id="question">
            <div>Question: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            
            <div id="a">A1: Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
            
            <div id="b">A2: Duis aute irure dolor</div>
            
            <div id="c">A3: Excepteur sint occaecat</div>
            
            <div id="d">A4: deserunt mollit anim id</div>
        </div>
    </div>
</body>

</html>