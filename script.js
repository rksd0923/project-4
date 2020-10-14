let button = document.querySelector("button")
let intro = document.querySelector(".intro")
//let out = document.querySelector(".out")
let game = document.querySelector(".game")
let country = document.querySelector(".country")
let answers = document.querySelectorAll(".answers")
let firstRow = document.querySelector(".first-row")
let answer1 = document.querySelector(".answer1")
let answer2 = document.querySelector(".answer2")
let answer3 = document.querySelector(".answer3")
let answer4 = document.querySelector(".answer4")
let result = document.querySelector(".result")

let countries = ['Brazil', 'Argentina', 'El Salvador', 'Mexico', 'Belize', 'Egypt', 'Madagascar', 'France', 'Italy', 'China', 'Iraq', 'Australia', 'New Zealand']
let firstAnswer = ['La Paz', 'Brazilia', 'Caracas', 'San Juan']
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
let correctAnswers = ['Brazilia', 'Buenos Aires', 'San Salvador', 'Mexico City', 'Belmopan', 'Cairo', 'Antanarivo', 'Paris', 'Rome', 'Beijing', 'Baghdad', 'Canberra', 'Wellington']
let counter = 0;

  


button.addEventListener("click", startGame)
//answers.addEventListener("click", secondQuestion)
//answers.addEventListener("click", thirdQuestion)



function startGame(){
  
    
    console.log("it works");
    intro.style.opacity = 0;
    game.style.opacity = 100;
    country.innerText = countries[0];
    answer1.innerText = firstAnswer[0];
    answer2.innerText = firstAnswer[1];
    answer3.innerText = firstAnswer[2];
    answer4.innerText = firstAnswer[3];
    answers.forEach(answer=>{
        
    answer.addEventListener('click', secondQuestion)
    
    })

}

    function secondQuestion(e){
      console.log(e.target.innerText)  
      if(correctAnswers[0] === e.target.innerText){
        
        counter++
        console.log("Correct answer", counter)
    }
    else{
        console.log("incorrect")
    }   
        
        country.innerText = countries[1];
        answer1.innerText = secondAnswer[0];
        answer2.innerText = secondAnswer[1];
        answer3.innerText = secondAnswer[2];
        answer4.innerText = secondAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', secondQuestion)
            answer.addEventListener('click', thirdQuestion)
            
            })
        //answer.addEventListener('click', thirdQuestion)
            
                

        
        
        //answers.addEventListener("click", thirdQuestion)
                
               
        

        
        
    }

    
    
    function thirdQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[1] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[2];
        answer1.innerText = thirdAnswer[0];
        answer2.innerText = thirdAnswer[1];
        answer3.innerText = thirdAnswer[2];
        answer4.innerText = thirdAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', thirdQuestion)
            answer.addEventListener('click', fourthQuestion)
            
            })
        //answers.addEventListener("click", fourthQuestion)
        
        
        console.log(e.target.innerText)  
      
        
    }

    function fourthQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[2] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[3];
        answer1.innerText = fourthAnswer[0];
        answer2.innerText = fourthAnswer[1];
        answer3.innerText = fourthAnswer[2];
        answer4.innerText = fourthAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', fourthQuestion)
            answer.addEventListener('click', fifthQuestion)
            
            })
        //answers.addEventListener("click", fourthQuestion)
        
        
        
    }

    function fifthQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[3] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[4];
        answer1.innerText = fifthAnswer[0];
        answer2.innerText = fifthAnswer[1];
        answer3.innerText = fifthAnswer[2];
        answer4.innerText = fifthAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', fifthQuestion)
            answer.addEventListener('click', sixthQuestion)
            
            })
       // answers.addEventListener("click", sixthQuestion)
        
        
       
    }

    function sixthQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[4] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[5];
        answer1.innerText = sixthAnswer[0];
        answer2.innerText = sixthAnswer[1];
        answer3.innerText = sixthAnswer[2];
        answer4.innerText = sixthAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', sixthQuestion)
            answer.addEventListener('click', seventhQuestion)
            
            })
        //answers.addEventListener("click", seventhQuestion)
        
        
        
    }

    function seventhQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[5] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[6];
        answer1.innerText = seventhAnswer[0];
        answer2.innerText = seventhAnswer[1];
        answer3.innerText = seventhAnswer[2];
        answer4.innerText = seventhAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', seventhQuestion)
            answer.addEventListener('click', eigthQuestion)
            
            })
        //answers.addEventListener("click", eigthQuestion)
        
        
        
    }

    function eigthQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[6] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[7];
        answer1.innerText = eigthAnswer[0];
        answer2.innerText = eigthAnswer[1];
        answer3.innerText = eigthAnswer[2];
        answer4.innerText = eigthAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', eigthQuestion)
            answer.addEventListener('click', ninthQuestion)
            
            })
        //answers.addEventListener("click", ninthQuestion)
        
    }

    function ninthQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[7] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[8];
        answer1.innerText = ninthAnswer[0];
        answer2.innerText = ninthAnswer[1];
        answer3.innerText = ninthAnswer[2];
        answer4.innerText = ninthAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', ninthQuestion)
            answer.addEventListener('click', tenthQuestion)
            
            })
        //answers.addEventListener("click", ninthQuestion)
        
    }

    function tenthQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[8] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[9];
        answer1.innerText = tenthAnswer[0];
        answer2.innerText = tenthAnswer[1];
        answer3.innerText = tenthAnswer[2];
        answer4.innerText = tenthAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', tenthQuestion)
            answer.addEventListener('click', eleventhQuestion)
            
            })
        //answers.addEventListener("click", tenthQuestion)
        
    }

    
    
    function eleventhQuestion(e){

        
        console.log(e.target.innerText)
        if(correctAnswers[9] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[10];
        answer1.innerText = eleventhAnswer[0];
        answer2.innerText = eleventhAnswer[1];
        answer3.innerText = eleventhAnswer[2];
        answer4.innerText = eleventhAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', eleventhQuestion)
            answer.addEventListener('click', doceQuestion)
            
            })
       // answers.addEventListener("click", doceQuestion)
       
    }

    function doceQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[10] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[11];
        answer1.innerText = doceAnswer[0];
        answer2.innerText = doceAnswer[1];
        answer3.innerText = doceAnswer[2];
        answer4.innerText = doceAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', doceQuestion)
            answer.addEventListener('click', treceQuestion)
            
            })
        //answers.addEventListener("click", treceQuestion)
        
    }

    function treceQuestion(e){
        console.log(e.target.innerText)
        if(correctAnswers[11] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        }   
        country.innerText = countries[12];
        answer1.innerText = treceAnswer[0];
        answer2.innerText = treceAnswer[1];
        answer3.innerText = treceAnswer[2];
        answer4.innerText = treceAnswer[3];
        answers.forEach(answer=>{
            answer.removeEventListener('click', treceQuestion)
            answer.addEventListener('click', endGame)
            
            })
        //answers.addEventListener("click", gameResult)
        
    }

    function endGame(e){
        game.style.opacity = 0;
        //intro.style.opacity = 100;
        

        
        console.log(e.target.innerText)
        if(correctAnswers[12] === e.target.innerText){
        
            counter++
            console.log("Correct answer", counter)
        }
        else{
            console.log("incorrect")
        } 

        answers.forEach(answer=>{
            answer.removeEventListener('click', endGame)
            answer.addEventListener('click', result)
            
            })

            
            console.log(counter)
            if(counter == 1){
                console.log("you suck")
                intro.innerText = "YOU SUCK, 1/13"
                
            }

            if(counter == 2){
                console.log("you suck")
                intro.innerText = "YOU SUCK"
            }

            if(counter == 3){
                console.log("you suck")
                intro.innerText = "YOU SUCK"
            }

            if(counter == 4){
                console.log("you suck")
                intro.innerText = "YOU SUCK"
            }
            
            if(counter == 5){
                console.log("you suck")
                intro.innerText = "YOU SUCK"
            }

            if(counter == 6){
                console.log("you suck")
                intro.innerText = "READ MORE"
            }

            if(counter == 7){
                console.log("Read more")
                intro.innerText = "READ MORE"
            }

            if(counter == 8){
                console.log("you suck")
                intro.innerText = "READ MORE"
            }

            if(counter == 9){
                console.log("you suck")
                intro.innerText = "HOLY CRAP YOU'RE GOOD"
            }

            if(counter == 10){
                console.log("you suck")
                intro.innerText = "HOLY CRAP YOU'RE GOOD"
            }

            if(counter == 11){
                console.log("you suck")
                intro.innerText = "HOLY CRAP YOU'RE GOOD"
            }

            if(counter == 12){
                console.log("you suck")
                intro.innerText = "HOLY CRAP, YOU'RE GOOD"
            }

            if(counter == 13){
                console.log("HOLY CRAP, YOU'RE GOOD")
                intro.innerText = "YOU SUCK"
            }
            
            result.style.display = "block";
        
        

        }
        
       
        
        
        
        


    
    
    



























