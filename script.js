
let button = document.querySelector("button")
let intro = document.querySelector(".intro")
let reset = document.querySelector(".reset")
let game = document.querySelector(".game")
let score = document.querySelector("p")
let country = document.querySelector(".country")
let answers = document.querySelectorAll(".answers")
let firstRow = document.querySelector(".first-row")
let answer1 = document.querySelector(".answer1")
let answer2 = document.querySelector(".answer2")
let answer3 = document.querySelector(".answer3")
let answer4 = document.querySelector(".answer4")
let result = document.querySelector(".result")
let img = document.querySelector(".img")
let container = document.querySelector(".body-container")
let resetButton = document.querySelector(".resetButton")

let countries = ['Chile', 'Argentina', 'El Salvador', 'Mexico', 'Belize', 'Egypt', 'Madagascar', 'France', 'Italy', 'China', 'Iraq', 'Australia', 'New Zealand']
let firstAnswer = ['La Paz', 'Santiago', 'Caracas', 'San Juan']
let secondAnswer = ['Madrid', 'Quito', 'Asuncion', 'Buenos Aires']
let thirdAnswer = ['Managua', 'Lima', 'San Salvador', 'San Jose']
let fourthAnswer = ['Guadalajara', 'San Antonio', 'Mexico City', 'La Union']
let fifthAnswer = ['San Pedro', 'Belmopan', 'San Ignacio', 'Punta Gorda']
let sixthAnswer = ['Cairo', 'Alexandria', 'Casa Blanca', 'The Nile']
let seventhAnswer = ['Toliara', 'Antananarivo', 'Port Lewis', 'Mahajanga']
let eigthAnswer = ['Nice', 'Lille', 'Nantes', 'Paris']
let ninthAnswer = ['Milan', 'Sampdoria', 'Rome', 'Sicily']
let tenthAnswer = ['Beijing', 'Tianjin', 'Xian', 'Wahun']
let eleventhAnswer = ['Fallujah', 'Baghdad', 'Kirkuk', 'Karbala']
let doceAnswer = ['Sidney', 'Canberra', 'Melbourne', 'Darwin']
let treceAnswer = ['Auckland', 'Nelson', 'Wellington', 'Napier']
let correctAnswers = ['Santiago', 'Buenos Aires', 'San Salvador', 'Mexico City', 'Belmopan', 'Cairo', 'Antananarivo', 'Paris', 'Rome', 'Beijing', 'Baghdad', 'Canberra', 'Wellington']
let counter = 0;

button.addEventListener("click", startGame)
button.addEventListener("mouseover", color)
function color(){
    button.style.backgroundColor = "#C20E18"
}
button.addEventListener("mouseout", colorBack)
function colorBack(){
    button.style.backgroundColor = "rgba(0,0,0, 0.4)"
}

function setButtons(questionAnswers, countryIndex, nextQuestion, previousQuestion=undefined){
    country.innerText = countries[countryIndex]
    answers.forEach((answer, i)=>{
        answer.innerText = questionAnswers[i]
        if(previousQuestion!==undefined){
            answer.removeEventListener("click", previousQuestion)
        }
        answer.addEventListener('click', nextQuestion)
        
        })
        
}
function checkAnswer(submittedAnswer, answerIndex){
    if(correctAnswers[answerIndex] === submittedAnswer){
        
        counter++
        console.log("Correct answer", counter)
        
    }
    else{
        console.log("incorrect")
    } 
    score.innerText = `SCORE ${counter}`
}
function setQuestion(e, questionAnswers, answerIndex, nextQuestion, previousQuestion=undefined, imgurl=undefined){
    checkAnswer(e.target.innerText, answerIndex)
    
    if(imgurl!==undefined){
        img.style.backgroundImage = `url(${imgurl})`;  
    }
    if(previousQuestion!==undefined){
        setButtons(questionAnswers,1, nextQuestion, previousQuestion)  
    }else{
        setButtons(questionAnswers,1, nextQuestion)
    }
        
}

function startGame(){    
    console.log("it works");
    intro.style.display = "none";
    setButtons(firstAnswer,0, secondQuestion)
    game.style.display = "flex";
    container.style.backgroundImage = 0.5;
    img.style.backgroundImage = "url(Images/chile-flag.png)"; 
    container.style.backgroundImage = "url(Images/santiago.jpg)";
}
    function secondQuestion(e){
        console.log(e);
      checkAnswer(e.target.innerText, 0)
    img.style.backgroundImage = "url(Images/argentina.jpeg)";  
    setButtons(secondAnswer,1, thirdQuestion, secondQuestion)   
    container.style.backgroundImage = "url(Images/buenos-aires-download-free.original.jpg)";
    
        
}    
    function thirdQuestion(e){
        checkAnswer(e.target.innerText, 1)
    img.style.backgroundImage = "url(Images/el-salvador-flag-medium.jpg)";  
     setButtons(thirdAnswer,2, fourthQuestion, thirdQuestion)
     container.style.backgroundImage = "url(Images/san-salvadores.png)";
    
}
    function fourthQuestion(e){
        checkAnswer(e.target.innerText, 2)
    img.style.backgroundImage = "url(Images/mexico-flag-small.jpg)";  
     setButtons(fourthAnswer,3, fifthQuestion, fourthQuestion)
     container.style.backgroundImage = "url(Images/mexico.jpg)";
        
}
    function fifthQuestion(e){
        checkAnswer(e.target.innerText, 3)
    img.style.backgroundImage = "url(Images/belize-flag-small.jpg)";  
     setButtons(fifthAnswer,4, sixthQuestion, fifthQuestion)
     container.style.backgroundImage = "url(Images/belmopan.jpg)";
        
} 
    function sixthQuestion(e){
        checkAnswer(e.target.innerText, 4)
    img.style.backgroundImage = "url(Images/egypt-flag-small.jpg)";  
     setButtons(sixthAnswer,5, seventhQuestion, sixthQuestion)
     container.style.backgroundImage = "url(Images/cairo.jpg)";
        
}
    function seventhQuestion(e){
    checkAnswer(e.target.innerText, 5)
    img.style.backgroundImage = "url(Images/madagascar-flag-small.jpg)";  
    setButtons(seventhAnswer,6, eigthQuestion, seventhQuestion)
    container.style.backgroundImage = "url(Images/Antananarivo-Madagascar.jpg)";
        
}

    function eigthQuestion(e){
    checkAnswer(e.target.innerText, 6)
    img.style.backgroundImage = "url(Images/france-flag-small.jpg)";  
    setButtons(eigthAnswer,7, ninthQuestion, eigthQuestion)
    container.style.backgroundImage = "url(Images/paris.jpg)";
    
}  

function ninthQuestion(e){
    checkAnswer(e.target.innerText, 7)
img.style.backgroundImage = "url(Images/italy.jpg)";  
setButtons(ninthAnswer,8, tenthQuestion, ninthQuestion)
container.style.backgroundImage = "url(Images/rome.jpg)";
   
}

function tenthQuestion(e){
   checkAnswer(e.target.innerText, 8)
img.style.backgroundImage = "url(Images/china.jpg)";  
setButtons(tenthAnswer,9, eleventhQuestion, tenthQuestion)
container.style.backgroundImage = "url(Images/beijing.jpg)";
   
}

function eleventhQuestion(e){
checkAnswer(e.target.innerText, 9)
img.style.backgroundImage = "url(Images/iraq.jpg)";  
setButtons(eleventhAnswer,10, doceQuestion, eleventhQuestion)
container.style.backgroundImage = "url(Images/baghdad.jpg)"; 
}

function doceQuestion(e){
   checkAnswer(e.target.innerText, 10)
img.style.backgroundImage = "url(Images/australia.jpg)";  
setButtons(doceAnswer,11, treceQuestion, doceQuestion)
container.style.backgroundImage = "url(Images/canberra.jpg)";   
}

function treceQuestion(e){
   checkAnswer(e.target.innerText, 11)
img.style.backgroundImage = "url(Images/new-zealand.jpg)";  
setButtons(treceAnswer,12, endGame, treceQuestion)
container.style.backgroundImage = "url(Images/wellington.jpg)";  
}

function endGame(e){
   game.style.opacity = 0;
      
   console.log(e.target.innerText)
   if(correctAnswers[12] === e.target.innerText){
   
       counter++
       console.log("Correct answer", counter)
   }
   else{
       console.log("incorrect")
   } 

       console.log(counter)
       if(counter <= 5){
           console.log("you suck")
           result.innerText = `Your Score is ${counter} out of 13\n You need to study more`
           
       }

       if(counter >= 6 && counter < 9){
           console.log("Good Job")
           result.innerText = `Your Score is ${counter} out of 13\n Getting better`
       }

       if(counter >= 9 && counter < 11){
           console.log("Great Job")
           result.innerText = `Your Score is ${counter} out of 13\n Good Job`
       }

       if(counter >= 11 && counter <= 13){
        console.log("Great Job")
        result.innerText = `Your Score is ${counter} out of 13\n Great Job`
    }
       container.style.backgroundImage = "url(Images/worldmapflags.jpg)";

       result.style.display = "flex";
       resetButton.style.display = "flex"
   
   }

   reset.addEventListener("mouseover", changeColor)
   reset.addEventListener("mouseout", changeBack)
   reset.addEventListener("click", reload)
    
   function changeColor(){
       reset.style.backgroundColor = "red";
   }

   function changeBack(){
    reset.style.backgroundColor = "rgba(0,0,0, 0.4)";
}
function reload(){
    window.location.reload(true)
}


       

    
        
        
        

    

    
        

        
        
       
        
        
        
        


    
    
    



























