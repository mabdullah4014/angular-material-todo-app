class CreateTodoFormController {
  constructor(API, ToastService,$state) {
    'ngInject';

    this.API = API;
    this.$state = $state;
    this.ToastService = ToastService;
  }

  $onInit() {
    var data = {
      name: '',
      description: '',
      completed: false
    };
  }

  submit() {
    let self = this;
    var data = {
      name: this.name,
      description: this.description,
      completed: this.completed
    };
    this.API.all('todos').post(data).then((response) => {
      self.$state.go('app.todos');
      self.ToastService.show('Todo added successfully');
    });
  }
}

export const CreateTodoFormComponent = {
  templateUrl: './views/app/components/create_todo_form/create_todo_form.component.html',
  controller: CreateTodoFormController,
  controllerAs: 'vm',
  bindings: {}
}
