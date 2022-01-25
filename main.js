var students_name=[];
function submit(){
    var name_1=document.getElementById("student_1").value
    var name_2=document.getElementById("student_2").value
    var name_3=document.getElementById("student_3").value
    var name_4=document.getElementById("student_4").value
    students_name.push(name_1)
    students_name.push(name_2)
    students_name.push(name_3)
    students_name.push(name_4)
    console.log(students_name)
    document.getElementById("display_students_name").innerHTML=students_name
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    students_name.sort()
    console.log(students_name)
    document.getElementById("display_students_name").innerHTML=students_name
}