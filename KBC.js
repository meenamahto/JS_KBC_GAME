console.log("\n\t\tWELCOME IN KBC.....kaun banega coder\n")
console.log("\t\t`````````````````````````````````````")
console.log("\tnamskar! me Amitabh bachchan bol rha hu........\n\t\tkaun banega coder se\n let's play\n")
const rs=require("readline-sync");
var name=rs.question("Eter your good name:")
console.log("So first question on your screen\n")
let=question = [
"How many continents are there?",
"What is the capital of India?", 
"NG mei kaun se course padhaya jaata hai?" ,
"who is the founder of 'python'?","when python is published?",
"python is a ______ programming language?"
]

let=options = [
["Four", "Nine", "Seven", "Eight"],
["Chandigarh", "Bhopal", "Chennai", "Delhi"],
["Software Engineering", "Counseling", "Tourism", "Agriculture"],
["bill gates","guido van rossum","jeff bezoz","ratan tata"],["1989","1990","1991","1992"],
["high level","interpreted","general purpose","all of the above"]
]

let=solution = [4, 4, 1,2,3,4]
li=[["3 seven","4 Eight"],["2 bhopal","4 Delhi"],["1 software engineering","2 counseling"],
["1 bill gates","2 guido van rossum"],["1 1989","3 1991"],["1 high level","4 all of the above"]]

let=pall=[["1 four- 20%","2 nine-40%","3 seven- 80%","4 Eight- 99.9%"],
["1 chnadigarh-60%","2 bhopal- 85%","3 chennai-35%","4 Delhi- 99.9%"],
["1 software engineering- 99.9%","2 counseling- 90%","3 Tourism-65%","4 Agriculture- 20%"],
[" 1 bill gates- 90%","2 guido van rossum- 99.9%"," 3 jeff bezoz- 45%","4 ratan tata- 60%"],
["1 1989- 70%","2 1990- 40%","3 1991- 90%","4 1992- 50%"],
["1 high level- 90%","2 interpreted- 60%","3 general purpose- 70%","4 all of the above- 99.1%"]
]
let=experts=["1 Teena Dabi","2 Vikash Divyakirti","3 Meena Mahto","4 Srushti Jayant Deshmukh"]

let i=0,money=0;
let count_1=0,count_2=0,count_3=0;
while(i<question.length){
    console.log(question[i])
    let k=i;
    let j=0;
    while(j<options[k].length){
        console.log(`${j+1}) ${options[k][j]}`)
        j++
    }
    const rs=require("readline-sync");
    var lifeline=rs.question("Do you want lifeline or not (y/n) :");
    if (lifeline=="y"){
        console.log("1) 50-50 lifeline\n2) audiance pall lifeline\n3) Expert pall lifeline")
        const rs1=require("readline-sync");
        var choose_lifeline=rs1.questionInt("Enter your lifeline number:")
        if (choose_lifeline==1 && count_1==0){
            let index=0;
            while(index<li[i].length){
                console.log(`${index+1}) ${li[i][index]}`)
                index++
            }
            console.log("Choose your answer which is given above")
            let read_s=require("readline-sync");
            var ans=read_s.questionInt("Enter your answer:");
            if (ans==solution[i]){
                console.log("correct")
                money+=1000
            }else{
                console.log("Sorry, you lost game....!")
                break
            }
            count_1++
            
        }
        else if (choose_lifeline==2 && count_2==0){
            let index=0;
            while(index<pall[i].length){
                console.log(`${index+1}) ${pall[i][index]}`)
                index++
            }
            console.log("Choose your answer which is given above")
            let read_s=require("readline-sync");
            var ans=read_s.questionInt("Enter your answer:");
            if (ans==solution[i]){
                console.log("correct")
                money+=1000
            }else{
                console.log("Sorry, you lost game....!")
                break
            }
            count_2++
            
        }
        else if (choose_lifeline==3 && count_3==0){
            let index=0;
            while(index<experts.length){
                console.log(`${index+1}) ${experts[index]}`)
                index++
            }
            const rs=require("readline-sync");
            var number_exp=rs.questionInt("Enter your number of experts whichever you want:")
            console.log("So Experts answer is=",solution[i])
            console.log("Choose your answer which is given above")
            let read_s=require("readline-sync");
            var ans=read_s.questionInt("Enter your answer:");
            if (ans==solution[i]){
                console.log("correct")
                money+=1000
            }else{
                console.log("Sorry, you lost game....!")
                break
            }
            count_3++
            
        }else{
            console.log("you can use lifeline only once!")
            let read_s=require("readline-sync");
            var ans=read_s.questionInt("Enter your number of answer:");
            if (ans==solution[i]){
                console.log("correct")
                money+=1000
            }else{
                console.log("Sorry, you lost game....!")
                break
            }   
        }  
    }else{
        let read_s=require("readline-sync");
        var ans=read_s.questionInt("Enter your answer:");
        if (ans==solution[i]){
            console.log("correct")
            money+=1000
        }else{
            console.log("Sorry, you lost game....!")
            break
        }
    }
    i++
}
console.log(`Thankyou ${name} for play with us! you won the cheque of ${money}/-`)
