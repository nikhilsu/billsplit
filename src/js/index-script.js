function getAllCheckedCheckboxes(nameOfCheckboxElement) {
    var checkBoxes = document.getElementsByName(nameOfCheckboxElement);
    var checkedCheckBoxes = [];

    for (var i=0;i<checkBoxes.length;i++){
        if (checkBoxes[i].checked){
            checkedCheckBoxes.push(checkBoxes[i].value);
        }
    }
    return checkedCheckBoxes;
}