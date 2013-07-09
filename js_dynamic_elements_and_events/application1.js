$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
 
  
  function bindEvents() {
    $(".add").on("click",  addtoDo); 
    $(".todo_list").on("click", ".delete", removetoDo);
    $(".todo_list").on("click", ".complete", markComplete);
  }

function addtoDo(e) {
  var todo = buildTodo($('input').val());
  $('.todo_list').append(todo);
}

function removetoDo(e) {
  $(e.target).closest(".todo").remove();
    // find the closests ancestors to selector class "todo"
}

function markComplete(e) {
 $(this).closest("li:nth-child(2)").append("d");
}

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});







