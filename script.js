// // form submission code:


// function create_label(tagname,attr,attrval,content){
//     var label_ele=document.createElement(tagname)
//     label_ele.setAttribute(attr,attrval)
//     label_ele.innerHTML=content
//     return label_ele
// }

// function create_input(tagname,attr,attrval,idattr,idval,nameattr,nameval){
//     var input_ele=document.createElement(tagname)
//     input_ele.setAttribute(attr,attrval)
//     input_ele.setAttribute(idattr,idval)
//     input_ele.setAttribute(nameattr,nameval)
//     return input_ele
// }

// function create_input_radio_check(tagname,attr,attrval,idattr,idval,nameattr,nameval,valattr,val_value,content){
//     var input_elem=document.createElement(tagname)
//     input_elem.setAttribute(attr,attrval)
//     input_elem.setAttribute(idattr,idval)
//     input_elem.setAttribute(nameattr,nameval)
//     input_elem.setAttribute(valattr,val_value)
//     input_elem.innerHTML=content
//     return input_elem
// }

// function break_tag(){
//     var break_ele=document.createElement("br")
//     return break_ele
// }

// var fname_label=create_label("label","for","FirstName","FirstName")
// var fname_br=break_tag()
// var fname_input=create_input("input","type","text","id","FirstName","name","FirstName")
// var fname_br_input = break_tag()

// var lname_label=create_label("label","for","LastName","LastName")
// var lname_br=break_tag()
// var lname_input=create_input("input","type","text","id","LastName","name","LastName")
// var lname_br_input = break_tag()

// var add1_label=create_label("label","for","Address_Line_1","Address Line 1")
// var add1_br=break_tag()
// var add1_input=create_input("input","type","text","id","Address_Line_1","name","Address_Line_1")
// var add1_br_input = break_tag()

// var add2_label=create_label("label","for","Address_Line_2","Address Line 2")
// var add2_br=break_tag()
// var add2_input=create_input("input","type","text","id","Address_Line_2","name","Address_Line_2")
// var add2_br_input = break_tag()

// var pin_label=create_label("label","for","Pin","PIN")
// var pin_br=break_tag()
// var pin_input=create_input("input","type","text","id","Pin","name","Pin")
// var pin_br_input = break_tag()

// var gender_label=create_label("label","for","gender","Gender")
// var gender_br=break_tag()
// var fgender_input=create_input_radio_check("input","type","radio","id","Female","name","gender","value","female","Female")


// var fgender_label=create_label("label","for","female","Female")
// var fgender_br_input = break_tag()
// var mgender_input=create_input_radio_check("input","type","radio","id","Male","name","gender","value","male","Male")
// var mgender_label=create_label("label","for","male","Male")
// var mgender_br_input = break_tag()

// var food_label=create_label("label","for","food","Choice of Food: (Must choose at least 2 out of 5 options)")
// var food_br=break_tag()
// var food1_input=create_input_radio_check("input","type","checkbox","id","food1","name","food","value","North Indian","North Indian")
// var food1_label=create_label("label","for","food1","North Indian")
// var food1_br_input = break_tag()

// var food2_input=create_input_radio_check("input","type","checkbox","id","food2","name","food","value","South Indian","South Indian")
// var food2_label=create_label("label","for","food2","South Indian")
// var food2_br_input = break_tag()

// var food3_input=create_input_radio_check("input","type","checkbox","id","food3","name","food","value","Chinese","Chinese")
// var food3_label=create_label("label","for","food3","Chinese")
// var food3_br_input = break_tag()

// var food4_input=create_input_radio_check("input","type","checkbox","id","food4","name","food","value","Japanese","Japanese")
// var food4_label=create_label("label","for","food4","Japanese")
// var food4_br_input = break_tag()

// var food5_input=create_input_radio_check("input","type","checkbox","id","food5","name","food","value","Sea Food","Sea Food")
// var food5_label=create_label("label","for","food5","Sea Food")
// var food5_br_input = break_tag()

// var state_label=create_label("label","for","State","State")
// var state_br=break_tag()
// var state_input=create_input("input","type","text","id","State","name","State")
// var state_br_input = break_tag()

// var country_label=create_label("label","for","country","Country")
// var country_br=break_tag()
// var country_input=create_input("input","type","text","id","country","name","Country")
// var country_br_input = break_tag()

// var submit_ele=document.createElement("button")
// submit_ele.innerHTML="Submit"
// submit_ele.addEventListener("click",(event)=>foo(event))


// function foo(event){

//     event.preventDefault();

//     var fname=document.getElementById("FirstName").value
//     var lname=document.getElementById("LastName").value
//     var add1=document.getElementById("Address_Line_1").value
//     var add2=document.getElementById("Address_Line_2").value
//     var pin=document.getElementById("Pin").value
//     var state=document.getElementById("State").value
//     var country=document.getElementById("country").value

//     //Code for adding the gender in the variable gen

//     var options1 = document.getElementsByName('gender');
//     var gen
//     for (var i = 0; i < options1.length; i++) {
//     if (options1[i].checked) {
//      gen=options1[i].value;
//       break;
//     }
//     }

//     //Code for adding the food choices into an array

//     var options2 = document.getElementsByName('food');
//     var foodz = []; 
//     var count = 0;

//     for (var j = 0; j < options2.length; j++) {
//         if (options2[j].checked) {
//         count++;
//         foodz.push(options2[j].value);
//         }
//     }

//     if (count < 2) {
//       alert("Select at least 2 food choices");
//     }

//     var list1=[]
//     var list2=[]
//     var list3=[]
//     var list4=[]
//     var list5=[]
//     var list6=[]
//     var list7=[]
//     var list8=[]
//     var list9=[]
//     var n=1
//     var x=0

//     var addrow=document.getElementById('table');

//     console.log(addrow)
//     //Code to create a new row and add the elements
//     var newrow=addrow.insertRow();

    
//     // list1[x]=fname
//     // list2[x]=lname
//     // list3[x]=add1
//     // list4[x]=add2
//     // list5[x]=pin
//     // list6[x]=gen
//     // list7[x]=foodz
//     // list8[x]=state
//     // list9[x]=country

//     var cell1=newrow.insertCell(0)
//     var cell2=newrow.insertCell(1)
//     var cell3=newrow.insertCell(2)
//     var cell4=newrow.insertCell(3)
//     var cell5=newrow.insertCell(4)
//     var cell6=newrow.insertCell(5)
//     var cell7=newrow.insertCell(6)
//     var cell8=newrow.insertCell(7)
//     var cell9=newrow.insertCell(8)

//     cell1.innerHTML=fname
//     cell2.innerHTML=lname
//     cell3.innerHTML=add1
//     cell4.innerHTML=add2
//     cell5.innerHTML=pin
//     cell6.innerHTML=gen
//     cell7.innerHTML=foodz.join(",")
//     cell8.innerHTML=state
//     cell9.innerHTML=country

//     n++;
//     x++;


// // Reset form after submission
// document.getElementById("myForm").reset();


// //Code to create a new row gets over here


//     // console.log(fname)
//     // console.log(lname)  
//     // console.log(add1)
//     // console.log(add2)
//     // console.log(pin)
//     // console.log(gen)
//     // console.log(foodz)
//     // console.log(state)
//     // console.log(country)

// }



// // HTML Elements:

// var container=document.createElement("div")
// container.className="container"
// var row=document.createElement("div")
// row.className="row"
// var col1=document.createElement("div")
// col1.className="col-md-4"
// var col2=document.createElement("div")
// col2.className="col-md-8"
// var form=document.createElement("form")


// var heading=document.createElement("h3")
// heading.innerHTML="Form Submission"

// var div_form=document.createElement("div")
// div_form.className="main"

// div_form.append(form)

// col1.append(div_form)
// row.append(col1,col2)
// container.append(row)


// form.append(
//     heading,
//     fname_label,
//     fname_br,
//     fname_input,
//     fname_br_input,
//     lname_label,
//     lname_br,
//     lname_input,
//     lname_br_input,
//     add1_label,
//     add1_br,
//     add1_input,
//     add1_br_input,
//     add2_label,
//     add2_br,
//     add2_input,
//     add2_br_input,
//     pin_label,
//     pin_br,
//     pin_input,
//     pin_br_input,
//     gender_label,
//     gender_br,
//     fgender_input,
//     fgender_label,
//     fgender_br_input,
//     mgender_input,
//     mgender_label,
//     mgender_br_input,  
//     food_label,
//     food_br,
//     food1_input,
//     food1_label,
//     food1_br_input,
//     food2_input,
//     food2_label,
//     food2_br_input,
//     food3_input,
//     food3_label,
//     food3_br_input,
//     food4_input,
//     food4_label,
//     food4_br_input,
//     food5_input,
//     food5_label,
//     food5_br_input,
//     state_label,
//     state_br,
//     state_input,
//     state_br_input,
//     country_label,
//     country_br,
//     country_input,
//     country_br_input,
//     submit_ele
// )

// document.body.append(container)



// //Table Submission Code:

// function tableheader(tagname,attr,attrval,content)
// {
//     var tab_h=document.createElement(tagname)
//     tab_h.setAttribute(attr,attrval)
//     tab_h.innerHTML=content
//     return tab_h
// }

// function tab_row()
// {
//     var tab_r=document.createElement("tr")
//     return tab_r
// }

// function tab_data(tagname,content)
// {
//     var td=document.createElement(tagname)
//     td.innerHTML=content
//     return td
// }

// function tab_body()
// {
//     var tab_body=document.createElement("tbody")
//     // tab_body.setAttribute("id","table-body") //Created id seperately
//     return tab_body
// }

// function tab_head(tagname,classname)
// {
//     var t_head=document.createElement(tagname)
//     t_head.className=classname
//     return t_head
// }

// function tab_class(tagname,classname)
// {
//     var t_class=document.createElement(tagname)
//     t_class.className=classname
//     return t_class
// }

// var tab=tab_class("table","table")

// var thead=tab_head("thead","thead-dark")

// var tr1=tab_row()
// var th1=tableheader("th","scope","col","FirstName")
// var th2=tableheader("th","scope","col","LastName")
// var th3=tableheader("th","scope","col","Address Line 1")
// var th4=tableheader("th","scope","col","Address Line 2")
// var th5=tableheader("th","scope","col","Gender")
// var th6=tableheader("th","scope","col","Choice of Food")
// var th7=tableheader("th","scope","col","State")
// var th8=tableheader("th","scope","col","Country")

// tr1.append(th1,th2,th3,th4,th5,th6,th7,th8)
// thead.append(tr1)

// var tbody=tab_body()

// tab.append(thead,tbody)

// col2.append(tab)

function create_label(tagname, attr, attrval, content) {
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attr, attrval);
    label_ele.innerHTML = content;
    return label_ele;
}

function create_input(tagname, attr, attrval, idattr, idval, nameattr, nameval) {
    var input_ele = document.createElement(tagname);
    input_ele.setAttribute(attr, attrval);
    input_ele.setAttribute(idattr, idval);
    input_ele.setAttribute(nameattr, nameval);
    return input_ele;
}

function create_input_radio_check(tagname, attr, attrval, idattr, idval, nameattr, nameval, valattr, val_value, content) {
    var input_elem = document.createElement(tagname);
    input_elem.setAttribute(attr, attrval);
    input_elem.setAttribute(idattr, idval);
    input_elem.setAttribute(nameattr, nameval);
    input_elem.setAttribute(valattr, val_value);
    input_elem.innerHTML = content;
    return input_elem;
}

function break_tag() {
    var break_ele = document.createElement("br");
    return break_ele;
}

var fname_label = create_label("label", "for", "FirstName", "FirstName");
var fname_br = break_tag();
var fname_input = create_input("input", "type", "text", "id", "FirstName", "name", "FirstName");
var fname_br_input = break_tag();

var lname_label = create_label("label", "for", "LastName", "LastName");
var lname_br = break_tag();
var lname_input = create_input("input", "type", "text", "id", "LastName", "name", "LastName");
var lname_br_input = break_tag();

var add1_label = create_label("label", "for", "Address_Line_1", "Address Line 1");
var add1_br = break_tag();
var add1_input = create_input("input", "type", "text", "id", "Address_Line_1", "name", "Address_Line_1");
var add1_br_input = break_tag();

var add2_label = create_label("label", "for", "Address_Line_2", "Address Line 2");
var add2_br = break_tag();
var add2_input = create_input("input", "type", "text", "id", "Address_Line_2", "name", "Address_Line_2");
var add2_br_input = break_tag();

var pin_label = create_label("label", "for", "Pin", "PIN");
var pin_br = break_tag();
var pin_input = create_input("input", "type", "text", "id", "Pin", "name", "Pin");
var pin_br_input = break_tag();

var gender_label = create_label("label", "for", "gender", "Gender");
var gender_br = break_tag();
var fgender_input = create_input_radio_check("input", "type", "radio", "id", "Female", "name", "gender", "value", "female", "Female");


var fgender_label = create_label("label", "for", "female", "Female");
var fgender_br_input = break_tag();
var mgender_input = create_input_radio_check("input", "type", "radio", "id", "Male", "name", "gender", "value", "male", "Male");
var mgender_label = create_label("label", "for", "male", "Male");
var mgender_br_input = break_tag();

var food_label = create_label("label", "for", "food", "Choice of Food: (Must choose at least 2 out of 5 options)");
var food_br = break_tag();
var food1_input = create_input_radio_check("input", "type", "checkbox", "id", "food1", "name", "food", "value", "North Indian", "North Indian");
var food1_label = create_label("label", "for", "food1", "North Indian");
var food1_br_input = break_tag();

var food2_input = create_input_radio_check("input", "type", "checkbox", "id", "food2", "name", "food", "value", "South Indian", "South Indian");
var food2_label = create_label("label", "for", "food2", "South Indian");
var food2_br_input = break_tag();

var food3_input = create_input_radio_check("input", "type", "checkbox", "id", "food3", "name", "food", "value", "Chinese", "Chinese");
var food3_label = create_label("label", "for", "food3", "Chinese");
var food3_br_input = break_tag();

var food4_input = create_input_radio_check("input", "type", "checkbox", "id", "food4", "name", "food", "value", "Japanese", "Japanese");
var food4_label = create_label("label", "for", "food4", "Japanese");
var food4_br_input = break_tag();

var food5_input = create_input_radio_check("input", "type", "checkbox", "id", "food5", "name", "food", "value", "Sea Food", "Sea Food");
var food5_label = create_label("label", "for", "food5", "Sea Food");
var food5_br_input = break_tag();

var state_label = create_label("label", "for", "State", "State");
var state_br = break_tag();
var state_input = create_input("input", "type", "text", "id", "State", "name", "State");
var state_br_input = break_tag();

var country_label = create_label("label", "for", "country", "Country");
var country_br = break_tag();
var country_input = create_input("input", "type", "text", "id", "country", "name", "Country");
var country_br_input = break_tag();

var submit_ele = document.createElement("button");
submit_ele.innerHTML = "Submit";
submit_ele.addEventListener("click", (event) => foo(event));


function foo(event) {

    event.preventDefault();

    var fname = document.getElementById("FirstName").value;
    var lname = document.getElementById("LastName").value;
    var add1 = document.getElementById("Address_Line_1").value;
    var add2 = document.getElementById("Address_Line_2").value;
    var pin = document.getElementById("Pin").value;
    var state = document.getElementById("State").value;
    var country = document.getElementById("country").value;

    //Code for adding the gender in the variable gen

    var options1 = document.getElementsByName('gender');
    var gen;
    for (var i = 0; i < options1.length; i++) {
        if (options1[i].checked) {
            gen = options1[i].value;
            break;
        }
    }

    //Code for adding the food choices into an array

    var options2 = document.getElementsByName('food');
    var foodz = [];
    var count = 0;

    for (var j = 0; j < options2.length; j++) {
        if (options2[j].checked) {
            count++;
            foodz.push(options2[j].value);
        }
    }

    if (count < 2) {
        alert("Select at least 2 food choices");
        return; // Return if less than 2 choices are selected
    }

    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list5 = [];
    var list6 = [];
    var list7 = [];
    var list8 = [];
    var list9 = [];
    var n = 1;
    var x = 0;

    var addrow = document.getElementById('table').getElementsByTagName('tbody')[x];

    //Code to create a new row and add the elements
    var newrow = addrow.insertRow(n);


    list1[x] = fname;
    list2[x] = lname;
    list3[x] = add1;
    list4[x] = add2;
    list5[x] = pin;
    list6[x] = gen;
    list7[x] = foodz;
    list8[x] = state;
    list9[x] = country;

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);
    var cell8 = newrow.insertCell(7);
    var cell9 = newrow.insertCell(8);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];
    cell5.innerHTML = list5[x];
    cell6.innerHTML = list6[x];
    cell7.innerHTML = list7[x].join(', '); // Join food choices into a string
    cell8.innerHTML = list8[x];
    cell9.innerHTML = list9[x];

    n++;
    x++;

    // Reset form after submission
    document.getElementById("myForm").reset();

    // Code to create a new row gets over here
}

// HTML Elements:

var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";
var col1 = document.createElement("div");
col1.className = "col-md-4";
var col2 = document.createElement("div");
col2.className = "col-md-8";
var form = document.createElement("form");
form.id = "myForm"; // Added an id to the form

var heading = document.createElement("h3");
heading.innerHTML = "Form Submission";

var div_form = document.createElement("div");
div_form.className = "main";

div_form.append(form);

col1.append(div_form);
row.append(col1, col2);
container.append(row);

form.append(
    heading,
    fname_label,
    fname_br,
    fname_input,
    fname_br_input,
    lname_label,
    lname_br,
    lname_input,
    lname_br_input,
    add1_label,
    add1_br,
    add1_input,
    add1_br_input,
    add2_label,
    add2_br,
    add2_input,
    add2_br_input,
    pin_label,
    pin_br,
    pin_input,
    pin_br_input,
    gender_label,
    gender_br,
    fgender_input,
    fgender_label,
    fgender_br_input,
    mgender_input,
    mgender_label,
    mgender_br_input,
    food_label,
    food_br,
    food1_input,
    food1_label,
    food1_br_input,
    food2_input,
    food2_label,
    food2_br_input,
    food3_input,
    food3_label,
    food3_br_input,
    food4_input,
    food4_label,
    food4_br_input,
    food5_input,
    food5_label,
    food5_br_input,
    state_label,
    state_br,
    state_input,
    state_br_input,
    country_label,
    country_br,
    country_input,
    country_br_input,
    submit_ele
);

document.body.append(container);

//Table Submission Code:

function tableheader(tagname, attr, attrval, content) {
    var tab_h = document.createElement(tagname);
    tab_h.setAttribute(attr, attrval);
    tab_h.innerHTML = content;
    return tab_h;
}

function tab_row() {
    var tab_r = document.createElement("tr");
    return tab_r;
}

function tab_data(tagname, content) {
    var td = document.createElement(tagname);
    td.innerHTML = content;
    return td;
}

function tab_body() {
    var tab_body = document.createElement("tbody");
    // tab_body.setAttribute("id","table-body") //Created id seperately
    return tab_body;
}

function tab_head(tagname, classname) {
    var t_head = document.createElement(tagname);
    t_head.className = classname;
    return t_head;
}

function tab_class(tagname, classname) {
    var t_class = document.createElement(tagname);
    t_class.className = classname;
    return t_class;
}

var tab = tab_class("table", "table");

var thead = tab_head("thead", "thead-dark");

var tr1 = tab_row();
var th1 = tableheader("th", "scope", "col", "FirstName");
var th2 = tableheader("th", "scope", "col", "LastName");
var th3 = tableheader("th", "scope", "col", "Address Line 1");
var th4 = tableheader("th", "scope", "col", "Address Line 2");
var th5 = tableheader("th", "scope", "col", "Gender");
var th6 = tableheader("th", "scope", "col", "Choice of Food");
var th7 = tableheader("th", "scope", "col", "State");
var th8 = tableheader("th", "scope", "col", "Country");

tr1.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(tr1);

var tbody = tab_body();

tab.append(thead, tbody);

col2.append(tab);

document.body.append(col2);








