class TodoIndexController {
  constructor(API, ToastService) {
    'ngInject';
    this.API = API;
    this.ToastService = ToastService;
  }

  $onInit() {

    var self = this;
    this.todos = [];

    this.API.all('todos').getList().then(function(res) {
      self.todos = res;
    });

  }

  delete_todo(todo_id) {
    let self = this;
    let result = confirm('Are you sure you want to delete this item?');
    if (result) {
      this.API.one("todos", todo_id).remove().then(function(res) {
        self.todos = res;
        self.ToastService.show('Todo deleted successfully');
      }, function(res) {
        self.ToastService.show('Error');
      });
    }
  }

}


export const TodoIndexComponent = {
  templateUrl: './views/app/components/todo_index/todo_index.component.html',
  controller: TodoIndexController,
  controllerAs: 'vm',
  bindings: {}
}
