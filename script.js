let q = [
  ["Q-->1. What is Python?", {
    "A. A snake only": false,
    "B. A high-level programming language": true,
    "C. A database system": false,
    "D. An operating system": false
  }],
  ["Q-->2. Which feature is a strength of Python?", {
    "A. Easy to learn and read": true,
    "B. Requires complex syntax": false,
    "C. Works only on one platform": false,
    "D. Cannot be used for automation": false
  }],
  ["Q-->3. Python is known for which style of programming?", {
    "A. Simple and readable syntax": true,
    "B. Binary coding only": false,
    "C. Hardware-only programming": false,
    "D. No indentation rules": false
  }],
  ["Q-->4. Python is called an interpreted language because:", {
    "A. It is compiled directly to hardware": false,
    "B. It is executed line by line by an interpreter": true,
    "C. It cannot be run on computers": false,
    "D. It only writes flowcharts": false
  }],
  ["Q-->5. What is the file extension of a Python program?", {
    "A. .java": false,
    "B. .cpp": false,
    "C. .py": true,
    "D. .txt": false
  }],
  ["Q-->6. Which of these is a technical strength of Python?", {
    "A. Portability": true,
    "B. Very difficult syntax": false,
    "C. Requires no indentation": false,
    "D. Can run only on one device": false
  }],
  ["Q-->7. Which one is used to write comments in Python?", {
    "A. //": false,
    "B. #": true,
    "C. /* */": false,
    "D. <!-- -->": false
  }],
  ["Q-->8. What is the purpose of a comment?", {
    "A. To make code run faster": false,
    "B. To explain the code": true,
    "C. To store data permanently": false,
    "D. To compile the program": false
  }],
  ["Q-->9. Which of the following is a literal?", {
    "A. 25": true,
    "B. print": false,
    "C. input": false,
    "D. if": false
  }],
  ["Q-->10. What is a constant?", {
    "A. A value that does not change": true,
    "B. A value that changes every second": false,
    "C. A function name": false,
    "D. A loop statement": false
  }],
  ["Q-->11. Which of these is a built-in data type in Python?", {
    "A. int": true,
    "B. monitor": false,
    "C. keyboard": false,
    "D. printer": false
  }],
  ["Q-->12. Which of the following is an integer?", {
    "A. 3.14": false,
    "B. 'Python'": false,
    "C. 100": true,
    "D. True": false
  }],
  ["Q-->13. Which of these is a float?", {
    "A. 45": false,
    "B. 4.5": true,
    "C. '4.5'": false,
    "D. False": false
  }],
  ["Q-->14. Which data type is used for complex numbers?", {
    "A. int": false,
    "B. float": false,
    "C. complex": true,
    "D. str": false
  }],
  ["Q-->15. What is the real part of 3+4j?", {
    "A. 4": false,
    "B. 3": true,
    "C. 7": false,
    "D. j": false
  }],
  ["Q-->16. What is a set in Python?", {
    "A. An ordered collection with duplicates": false,
    "B. An unordered collection of unique items": true,
    "C. A single number": false,
    "D. A string slice": false
  }],
  ["Q-->17. Which of these is a string?", {
    "A. 56": false,
    "B. 5.6": false,
    "C. 'Hello'": true,
    "D. [1,2]": false
  }],
  ["Q-->18. What is indexing in strings?", {
    "A. Joining two strings": false,
    "B. Accessing a character by position": true,
    "C. Removing spaces": false,
    "D. Converting text to number": false
  }],
  ["Q-->19. In Python, string indexing starts from:", {
    "A. 1": false,
    "B. 0": true,
    "C. -1": false,
    "D. 10": false
  }],
  ["Q-->20. What is slicing in strings?", {
    "A. Deleting a string": false,
    "B. Extracting a part of a string": true,
    "C. Changing string to integer": false,
    "D. Sorting numbers": false
  }],
  ["Q-->21. What does concatenation mean in strings?", {
    "A. Splitting a string": false,
    "B. Joining two or more strings": true,
    "C. Reversing a string": false,
    "D. Counting characters": false
  }],
  ["Q-->22. Which operator is used for string concatenation?", {
    "A. +": true,
    "B. -": false,
    "C. *": false,
    "D. /": false
  }],
  ["Q-->23. What does len('Python') return?", {
    "A. 5": false,
    "B. 6": true,
    "C. 7": false,
    "D. 4": false
  }],
  ["Q-->24. What will 'Hello' * 3 do?", {
    "A. Add numbers": false,
    "B. Repeat the string 3 times": true,
    "C. Delete the string": false,
    "D. Convert it to lowercase": false
  }],
  ["Q-->25. Which method converts a string to uppercase?", {
    "A. upper()": true,
    "B. lower()": false,
    "C. split()": false,
    "D. replace()": false
  }],
  ["Q-->26. Which method converts a string to lowercase?", {
    "A. upper()": false,
    "B. lower()": true,
    "C. join()": false,
    "D. index()": false
  }],
  ["Q-->27. What is negative indexing used for in strings?", {
    "A. Accessing characters from the end": true,
    "B. Deleting characters": false,
    "C. Sorting characters": false,
    "D. Converting to integer": false
  }],
  ["Q-->28. Which index gives the last character of a string?", {
    "A. 0": false,
    "B. 1": false,
    "C. -1": true,
    "D. 10": false
  }],
  ["Q-->29. What is the output of \nnum='Python' \nprint([0])?", {
    "A. y": false,
    "B. P": true,
    "C. n": false,
    "D. t": false
  }],
  ["Q-->30. What is the output of \nnum='Python'\nprint([1:4])?", {
    "A. Pyt": false,
    "B. yth": true,
    "C. tho": false,
    "D. Hon": false
  }],
  ["Q-->31. Which one is an example of a boolean value?", {
    "A. True": true,
    "B. 10": false,
    "C. 'True'": false,
    "D. 2.5": false
  }],
  ["Q-->32. Which of these is a valid Python statement?", {
    "A. print('Hello')": true,
    "B. say Hello": false,
    "C. display Hello": false,
    "D. show('Hello')": false
  }],
  ["Q-->33. What does print() do?", {
    "A. Accepts input": false,
    "B. Displays output on screen": true,
    "C. Compiles code": false,
    "D. Stores variables": false
  }],
  ["Q-->34. Which function is used to accept input from the console?", {
    "A. print()": false,
    "B. input()": true,
    "C. scan()": false,
    "D. read()": false
  }],
  ["Q-->35. What type of data does input() return by default?", {
    "A. int": false,
    "B. float": false,
    "C. string": true,
    "D. bool": false
  }],
  ["Q-->36. Which of these is a simple Python program?", {
    "A. print('Welcome')": true,
    "B. draw welcome": false,
    "C. open welcome": false,
    "D. write welcome": false
  }],
  ["Q-->37. Which symbol is used for single-line comments?", {
    "A. #": true,
    "B. $": false,
    "C. @": false,
    "D. &": false
  }],
  ["Q-->38. Triple quotes in Python can be used for:", {
    "A. Multi-line comments or docstrings": true,
    "B. Integer input only": false,
    "C. File deletion": false,
    "D. Looping": false
  }],
  ["Q-->39. Which of these is a numeric data type?", {
    "A. int": true,
    "B. str": false,
    "C. list": false,
    "D. dict": false
  }],
  ["Q-->40. Which of these is not a built-in numeric type?", {
    "A. float": false,
    "B. complex": false,
    "C. real": true,
    "D. int": false
  }],
  ["Q-->41. What is the type of 8.0?", {
    "A. int": false,
    "B. float": true,
    "C. complex": false,
    "D. bool": false
  }],
  ["Q-->42. Which type is used for True/False values?", {
    "A. bool": true,
    "B. int": false,
    "C. str": false,
    "D. set": false
  }],
  ["Q-->43. What does the expression 5 + 2j represent?", {
    "A. Integer": false,
    "B. Complex number": true,
    "C. Set": false,
    "D. String": false
  }],
  ["Q-->44. Which of these is a set literal in Python?", {
    "A. {1, 2, 3}": true,
    "B. [1, 2, 3]": false,
    "C. (1, 2, 3)": false,
    "D. '1,2,3'": false
  }],
  ["Q-->45. Which collection type is mutable and ordered?", {
    "A. tuple": false,
    "B. list": true,
    "C. set": false,
    "D. str": false
  }],
  ["Q-->46. What is the output of type(10)?", {
    "A. float": false,
    "B. int": true,
    "C. str": false,
    "D. bool": false
  }],
  ["Q-->47. Which of these is a literal string?", {
    "A. 'Python'": true,
    "B. print": false,
    "C. input": false,
    "D. int": false
  }],
  ["Q-->48. Which is an example of a constant name by convention?", {
    "A. PI": true,
    "B. pi": false,
    "C. PiValue": false,
    "D. value1": false
  }],
  ["Q-->49. Which one is a feature of Python?", {
    "A. Platform independent": true,
    "B. Hard to read": false,
    "C. Only for games": false,
    "D. Not open source": false
  }],
  ["Q-->50. Which of these is used to store text?", {
    "A. string": true,
    "B. int": false,
    "C. float": false,
    "D. set": false
  }],
  ["Q-->51. What is the output of 'abc' + 'def'?", {
    "A. abc def": false,
    "B. abcdef": true,
    "C. abc+def": false,
    "D. error": false
  }],
  ["Q-->52. What is the output of \nnum='Python'\nprint(num[-1])?", {
    "A. P": false,
    "B. n": true,
    "C. o": false,
    "D. y": false
  }],
  ["Q-->53. Which slice gets the first three characters of 'Python'?", {
    "A. [1:3]": false,
    "B. [0:3]": true,
    "C. [0:4]": false,
    "D. [3:0]": false
  }],
  ["Q-->54. Which operation removes extra spaces from both sides of a string?", {
    "A. strip()": true,
    "B. split()": false,
    "C. join()": false,
    "D. find()": false
  }],
  ["Q-->55. Which method splits a string into a list?", {
    "A. split()": true,
    "B. lower()": false,
    "C. upper()": false,
    "D. count()": false
  }],
  ["Q-->56. What does count('l') return in 'Hello'?", {
    "A. 1": false,
    "B. 2": true,
    "C. 3": false,
    "D. 4": false
  }],
  ["Q-->57. Which of these is a valid Python variable name?", {
    "A. 2name": false,
    "B. name_2": true,
    "C. name-2": false,
    "D. name 2": false
  }],
  ["Q-->58. Which of these is an invalid variable name?", {
    "A. age": false,
    "B. total_marks": false,
    "C. 1value": true,
    "D. mark1": false
  }],
  ["Q-->59. What is the output of print('A', 'B')?", {
    "A. AB": false,
    "B. A B": true,
    "C. A,B": false,
    "D. error": false
  }],
  ["Q-->60. What does the end parameter in print() control?", {
    "A. The ending character after output": true,
    "B. The beginning of input": false,
    "C. The size of string": false,
    "D. The variable type": false
  }],
  ["Q-->61. What is the output of 5 + 3?", {
    "A. 8": true,
    "B. 53": false,
    "C. 2": false,
    "D. error": false
  }],
  ["Q-->62. What does int('25') return?", {
    "A. '25'": false,
    "B. 25": true,
    "C. 2.5": false,
    "D. error": false
  }],
  ["Q-->63. What does float(5) return?", {
    "A. 5": false,
    "B. 5.0": true,
    "C. 0.5": false,
    "D. error": false
  }],
  ["Q-->64. Which function shows the type of a value?", {
    "A. type()": true,
    "B. show()": false,
    "C. kind()": false,
    "D. data()": false
  }],
  ["Q-->65. What is the output of len('')?", {
    "A. 0": true,
    "B. 1": false,
    "C. 2": false,
    "D. error": false
  }],
  ["Q-->66. Which of these is a sequence data type?", {
    "A. string": true,
    "B. set": false,
    "C. int": false,
    "D. float": false
  }],
  ["Q-->67. Which one is unordered?", {
    "A. set": true,
    "B. string": false,
    "C. list": false,
    "D. tuple": false
  }],
  ["Q-->68. Which one is immutable?", {
    "A. list": false,
    "B. set": false,
    "C. string": true,
    "D. dict": false
  }],
  ["Q-->69. What is the output of 'Hi' * 2?", {
    "A. HiHi": true,
    "B. Hi 2": false,
    "C. 2Hi": false,
    "D. error": false
  }],
  ["Q-->70. Which of these is a floating-point number?", {
    "A. 12": false,
    "B. 12.0": true,
    "C. '12.0'": false,
    "D. True": false
  }],
  ["Q-->71. Which is a valid complex number in Python?", {
    "A. 3+4j": true,
    "B. 3+4i": false,
    "C. 3//4": false,
    "D. 3**4": false
  }],
  ["Q-->72. What does Python use to separate blocks of code?", {
    "A. Indentation": true,
    "B. Brackets only": false,
    "C. Semicolons only": false,
    "D. Capitals": false
  }],
  ["Q-->73. Which statement is used to display a message?", {
    "A. print('Hello')": true,
    "B. input('Hello')": false,
    "C. int('Hello')": false,
    "D. type('Hello')": false
  }],
  ["Q-->74. What does input('Enter name: ') do?", {
    "A. Takes input from user": true,
    "B. Prints only": false,
    "C. Deletes data": false,
    "D. Converts to integer automatically": false
  }],
  ["Q-->75. What is the output of 7 % 2?", {
    "A. 0": false,
    "B. 1": true,
    "C. 2": false,
    "D. 3": false
  }],
  ["Q-->76. Which operator is used for exponentiation?", {
    "A. **": true,
    "B. //": false,
    "C. %": false,
    "D. +": false
  }],
  ["Q-->77. What is the output of 2 ** 3?", {
    "A. 6": false,
    "B. 8": true,
    "C. 9": false,
    "D. 5": false
  }],
  ["Q-->78. Which of these is a simple Python program to print a name?", {
    "A. print('Ali')": true,
    "B. show('Ali')": false,
    "C. display('Ali')": false,
    "D. write('Ali')": false
  }],
  ["Q-->79. What is the output of 'Python'[2]?", {
    "A. t": true,
    "B. y": false,
    "C. P": false,
    "D. n": false
  }],
  ["Q-->80. What is the output of 'Python'[1:5:2]?", {
    "A. yhn": false,
    "B. yh": true,
    "C. yt": false,
    "D. th": false
  }],
  ["Q-->81. Which method checks whether a string starts with a prefix?", {
    "A. startswith()": true,
    "B. endswith()": false,
    "C. find()": false,
    "D. strip()": false
  }],
  ["Q-->82. Which method checks whether a string ends with a suffix?", {
    "A. endswith()": true,
    "B. startswith()": false,
    "C. index()": false,
    "D. split()": false
  }],
  ["Q-->83. What does 'Python'.find('th') return?", {
    "A. 1": false,
    "B. 2": true,
    "C. 3": false,
    "D. 4": false
  }],
  ["Q-->84. Which function converts a value to string?", {
    "A. str()": true,
    "B. int()": false,
    "C. float()": false,
    "D. bool()": false
  }],
  ["Q-->85. What is the output of bool(0)?", {
    "A. True": false,
    "B. False": true,
    "C. 0": false,
    "D. 1": false
  }],
  ["Q-->86. What is the output of bool(5)?", {
    "A. False": false,
    "B. True": true,
    "C. 0": false,
    "D. error": false
  }],
  ["Q-->87. Which of these is used to store multiple values in a single variable?", {
    "A. Data type": false,
    "B. Collection": true,
    "C. Operator": false,
    "D. Comment": false
  }],
  ["Q-->88. Which one is a list literal?", {
    "A. [1, 2, 3]": true,
    "B. {1, 2, 3}": false,
    "C. (1, 2, 3)": false,
    "D. '1,2,3'": false
  }],
  ["Q-->89. Which one is a tuple literal?", {
    "A. [1, 2, 3]": false,
    "B. (1, 2, 3)": true,
    "C. {1, 2, 3}": false,
    "D. '1,2,3'": false
  }],
  ["Q-->90. What does range(5) generate?", {
    "A. 1 to 5": false,
    "B. 0 to 4": true,
    "C. 0 to 5": false,
    "D. 1 to 4": false
  }],
  ["Q-->91. Which function is commonly used to get input as a number?", {
    "A. int(input())": true,
    "B. print(input())": false,
    "C. type(input())": false,
    "D. str(print())": false
  }],
  ["Q-->92. What is the output of 'abc' * 1?", {
    "A. abc": true,
    "B. abcabc": false,
    "C. a b c": false,
    "D. error": false
  }],
  ["Q-->93. Which of these is a comment line?", {
    "A. # This is a comment": true,
    "B. print('comment')": false,
    "C. input('comment')": false,
    "D. int(comment)": false
  }],
  ["Q-->94. Which of these is a literal number?", {
    "A. 500": true,
    "B. value": false,
    "C. sum()": false,
    "D. print()": false
  }],
  ["Q-->95. Which of these is used to output two values on one line?", {
    "A. print('A', 'B')": true,
    "B. input('A', 'B')": false,
    "C. int('A', 'B')": false,
    "D. type('A', 'B')": false
  }],
  ["Q-->96. What is the output of 'hello'.capitalize()?", {
    "A. hello": false,
    "B. Hello": true,
    "C. HELLO": false,
    "D. hELLO": false
  }],
  ["Q-->97. Which of these removes spaces from the left side only?", {
    "A. lstrip()": true,
    "B. rstrip()": false,
    "C. strip()": false,
    "D. split()": false
  }],
  ["Q-->98. Which of these removes spaces from the right side only?", {
    "A. rstrip()": true,
    "B. lstrip()": false,
    "C. strip()": false,
    "D. join()": false
  }],
  ["Q-->99. What is the output of 'Python'.count('o')?", {
    "A. 0": false,
    "B. 1": true,
    "C. 2": false,
    "D. 3": false
  }],
  ["Q-->100. Which of these is a correct simple Python program?", {
    "A. print('Hello World')": true,
    "B. show('Hello World')": false,
    "C. output('Hello World')": false,
    "D. display('Hello World')": false
  }]
];
        let index = 0;
        let total = 0;
        let answered = new Array(q.length).fill(false);
        let selectedAnswers = new Array(q.length).fill(null);
        let que = document.getElementById("question");
        let feedback = document.getElementById("feedback");
        let h2 = document.createElement("h2");
        que.appendChild(h2);

        let buttons = [];
        let s_btn;
        let h_solov=document.getElementById("h_solov");
        for(let i=1;i<=q.length;i++){
            s_btn=document.createElement("button");
             s_btn.id=`sbtn${i}`;
            s_btn.className="sbtn";
            s_btn.textContent=i;
            h_solov.appendChild(s_btn);
        }
let tbtn=document.getElementsByClassName("sbtn")

        for (let i = 0; i < 4; i++) {
            let btn = document.createElement("button");
            btn.className = "b";
            btn.addEventListener("click", () => ans(btn.textContent));
            que.appendChild(btn);
            buttons.push(btn);
        }
    

        function render() {
            let current = q[index];
            h2.textContent = current[0];
            let options = current[1];
            let keys = Object.keys(options);
            for (let i = 0; i < 4; i++) {
                buttons[i].textContent = keys[i];
                buttons[i].disabled = answered[index];
                buttons[i].style.backgroundColor = ""; 
            }
          
        }





        
        function next() {
            index++;
            if (index >= q.length) {
                index = 0;
            }
            render();
        }

        function privious() {
            index--;
            if (index < 0) {
                index = q.length - 1;
            }
            render();
        }

        function ans(selectedAns) {
            if (answered[index]) return;
            let options = q[index][1];
            selectedAnswers[index] = selectedAns;
            answered[index] = true;
            let temp=index+1;
            document.getElementById(`sbtn${temp}`).style.backgroundColor="green"
            if (options[selectedAns]) {
                total++;
            }
            render();
        }

        function submitQuiz() {
            total = 0; // Recalculate total
            for (let i = 0; i < q.length; i++) {
                let options = q[i][1];
                let correctAnswer = Object.keys(options).find(key => options[key]);
                if (selectedAnswers[i] === correctAnswer) {
                    total++;
                }
            }
            if(confirm("Do you want a  submit in this test")){
                 feedback.value = total;
                // feedback.style.color = "blue";
                document.getElementById("form_main").style.display="block";
                document.getElementById("quiz").style.display="none";
                document.getElementById("hh_solov").style.display="none";
                
                document.getElementById("time").style.display="none";
                showCorrectAnswers();
                
            }
        }

        function showCorrectAnswers() {
            let current = q[index];
            let options = current[1];
            let keys = Object.keys(options);
            let correctAnswer = keys.find(key => options[key]);

            for (let i = 0; i < 4; i++) {
                let btn = buttons[i];
                let btnText = btn.textContent;
                btn.disabled = true; // Disable buttons after submission
                
            }
        }

        // Whenever you render, if already submitted, show correct answer
        function render() {
            let current = q[index];
            h2.textContent = current[0];
            let options = current[1];
            let keys = Object.keys(options);
            for (let i = 0; i < 4; i++) {
                let btn = buttons[i];
                btn.textContent = keys[i];
                btn.disabled = answered[index];
                btn.style.backgroundColor = "";
            }
            feedback.textContent = "";

            // If quiz already submitted, show correct answer for this question
            if (feedback.textContent !== "") {
                showCorrectAnswers();
            }
        }
        
//rule start  
let check=document.getElementById("check_box");
let btn_info=document.getElementById("info__btn");
check.addEventListener('change', function(){
    if(this.checked){
        btn_info.style.display="block";
    }
    else{
        btn_info.style.display="none";
    }
});

function quiz_start(){
    document.getElementById("quiz").style.display="block";
    document.getElementById("hh_solov").style.display="block";
    document.getElementById("detail").style.display="none";
}





// rule end 

        function from_submit(){
            var roll_no=document.getElementById("roll").value;
            var Name=document.getElementById("name").value;
            var f_name=document.getElementById("f_name").value;
            var course=document.getElementById("course").value;
            if(roll_no =="" || Name =="" || f_name =="" || course ==""){
                alert("Please fill all info");
                return;
            }
            document.getElementById("quiz").style.display="none";
            let form_main=document.getElementById("form_main");
            let sub_msg=document.getElementById("sub_msg");
            form_main.style.display="none";
            sub_msg.style.display="block";
            //document.getElementById("form").style.display="block";
        }
    

// show pass 
let check_box=document.getElementById("remember");
let pass=document.getElementById("password")
check_box.addEventListener('change', function(){
    if(this.checked){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
});
// end show password

//login user
let user_name=""
let password=0;
let login_name=document.getElementById("user");
function login_usar(){
    if(pass.value==password && login_name.value==user_name){
        document.getElementById("detail").style.display="block";
        document.getElementById("login").style.display="none";
        //document.getElementById("quiz").style.display="block";
        

    }else{
        alert("invalid username and password");
    }
}

        let t=document.getElementById("time");
        let total_time=39*60;
        let min=39;
        let sec=60;
       


        function show_time(){
            if(sec==0){
                t.innerHTML="Time out -->"+min+": "+sec;
                sec=60;
                min--;
            }
            t.innerHTML="Time out -->"+min+": "+sec;
            sec--;
        }
    setInterval(show_time, 1000);
    let time_up=60000*35;
    setTimeout(function(){
        alert("your exam finished");
        t.style.display="none";
        submitQuiz();
        }, time_up)
            render();
            //information();


// API call for google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyueeeUvd9evE-PmRi96kL8OYUvRZoJhS9EM2AW0iAw3BM-FtQlQaL9pLVAIYTMXHFK/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks you ! your test submited"))
                .catch(error => console.error('Error!', error.message))
            })
            function submit__msg(){
                

            }