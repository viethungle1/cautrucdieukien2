function tinh() {
    let bmi;
    let weight = document.getElementById("cannang").value;
    let height = document.getElementById("chieucao").value;
    bmi = weight / (height ** 2);
    chiso = (bmi < 18) ? ("về nhà ăn thêm"):(bmi<25)?("ăn thế đủ rồi"):(bmi<30)?("ăn hơi nhiều"):("về nhà nhịn đi");
    alert(chiso);
}
// if (bmi < 18)
//     document.write("Underweight");
// else if (bmi < 25.0)
//     document.write("Normal");
// else if (bmi < 30.0)
//     document.write("Overweight");
// else
//     document.write("Obese");