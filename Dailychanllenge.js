/**
Correcteur: Yannick GOUGUIA

Vous mis des l'exercice du jour 2 a la place du jour 1 de la semaine 2
merci mettre a jour vos depot git
*/
let sentence= "The movie is not that bad, I like it" 
let wordNot = sentence.indexOf("not") 
let wordBad = sentence.indexOf("bad") 
if (wordNot !== -1 && wordBad !== -1 && wordNot< wordBad)
     { 
     let ordersentence= sentence.slice(0, wordNot) +"good" + sentence.slice(wordBad +3); 
     console.log(ordersentence); 
     }  
 else { 
         console.log(ordersentence); 
      }
 
