// when checked uncheck all other rows
var oneChecked = false;
$('#DataTableCommonName :checkbox').each(function() {
  if (extra.dataRowIndex !== $(this).data("row")){
    this.checked = false;
  } 
  // checked to see if at least one is checked
  if (this.checked){
    oneChecked = true;
    page.data.selected = extra.dataObject; // ideally you would make this page object
  } 
});
