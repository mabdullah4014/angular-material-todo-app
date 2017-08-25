class EditTodoFormController {
  constructor(API, ToastService,$state) {
    'ngInject';

    this.API = API;
    this.$state = $state;
    this.ToastService = ToastService;
  }

  $onInit() {
    let self = this;
    let todo_id = this.$state.params.todo_id;
    this.API.one('todos',todo_id).get().then(function(res) {
      self.todo = res;
      console.log(self.todo);
    });
  }

  submit() {
    // var data = {
    //   name: this.name,
    //   description: this.description,
    //   completed: this.completed
    // };
    let self = this;
    self.todo.put().then(function(res) {
      self.ToastService.show('Todo updated successfully');
      self.$state.go('app.todos');
    },function(res) {
      self.ToastService.show('Error');
    });
    // this.API.all('todos').post(data).then((response) => {
    //   this.ToastService.show('Todo updated successfully');
    // });
  }
}


export const EditTodoFormComponent = {
  templateUrl: './views/app/components/edit_todo_form/edit_todo_form.component.html',
  controller: EditTodoFormController,
  controllerAs: 'vm',
  bindings: {}
}
