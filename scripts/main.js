const database=firebase.database();
const rootref=database.ref('quiz');
var d_set=document.getElementById('d_set');

function creat_quiz(){
var question=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var c_opt=document.getElementById('c_opt');


        database.ref('/quiz/').push({

            question_t:question.value,
            opt1_t:opt1.value,
            opt2_t:opt2.value,
            opt3_t:opt3.value,
            opt4_t:opt4.value,
            c_opt1_t:c_opt.value,
            
            
        });

        question.value="";
        opt1.value="";
        opt2.value="";
        opt3.value="";
        opt4.value="";
        c_opt.value="";

    } 
    // //////////////////////////////


    function start_quiz(){

// 
database.ref('quiz/').once('value', function(data){

    data.forEach((childData) => {
    
    var childDataKey=childData.key;
    var childDataValue=childData.val();

    var fieldset=document.createElement("fieldset");
    var br1=document.createElement("br");
    var br2=document.createElement("br");
    var br3=document.createElement("br");

    var p=document.createElement("p");
    var p_text=document.createTextNode(childDataValue['question_t']);
    p.appendChild(p_text);
        // 
    var r_button1=document.createElement("INPUT");
    r_button1.setAttribute("type", "radio");
    // r_button1.setAttribute("onClick","del_btn('"+childDataKey+"')")
    r_button1.setAttribute("name",childDataKey);
    r_button1.setAttribute("value",childDataValue['opt1_t']);


    var label1=document.createElement("label");
    var label1_text=document.createTextNode(childDataValue['opt1_t']);
    label1.appendChild(label1_text);
        // 
    var r_button2=document.createElement("INPUT");
    r_button2.setAttribute("type", "radio");
    r_button2.setAttribute("name",childDataKey);
    r_button2.setAttribute("value",childDataValue['opt2_t']);

    var label2=document.createElement("label");
    var label2_text=document.createTextNode(childDataValue['opt2_t']);
    label2.appendChild(label2_text);
        // 
    var r_button3=document.createElement("INPUT");
    r_button3.setAttribute("type", "radio");
    r_button3.setAttribute("name",childDataKey);
    r_button3.setAttribute("value",childDataValue['opt3_t']);

    var label3=document.createElement("label");
    var label3_text=document.createTextNode(childDataValue['opt3_t']);
    label3.appendChild(label3_text);
        // 
    var r_button4=document.createElement("INPUT");
    r_button4.setAttribute("type", "radio");
    r_button4.setAttribute("name",childDataKey);
    r_button4.setAttribute("value",childDataValue['opt4_t']);

    var label4=document.createElement("label");
    var label4_text=document.createTextNode(childDataValue['opt4_t']);
    label4.appendChild(label4_text);
        // 

    d_set.appendChild(fieldset)
    fieldset.appendChild(p)
    fieldset.appendChild(r_button1)
    fieldset.appendChild(label1)
    fieldset.appendChild(br1)
    fieldset.appendChild(r_button2)
    fieldset.appendChild(label2)
    fieldset.appendChild(br2)
    fieldset.appendChild(r_button3)
    fieldset.appendChild(label3)
    fieldset.appendChild(br3)
    fieldset.appendChild(r_button4)
    fieldset.appendChild(label4)

});

});
    }


function end_quiz(){
    var score=0;
    var outOf=0;

    database.ref('quiz/').once('value', function(data){

        data.forEach((childData) => {
        
        var childDataKey=childData.key;
        var childDataValue=childData.val();    
        var test=document.getElementsByName(childDataKey)
        outOf+=10;

    test.forEach((rate) => {
        if ((rate.checked) && rate.value==childDataValue['c_opt1_t']) {
            score+=10;
        }
    })
    
})

alert("QUIZ Complete: You Score "+score+" Out of "+outOf)
});

}


    start_quiz();
