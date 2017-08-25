import {TodoIndexComponent} from './app/components/todo_index/todo_index.component';
import {EditTodoFormComponent} from './app/components/edit_todo_form/edit_todo_form.component';
import {CreateTodoFormComponent} from './app/components/create_todo_form/create_todo_form.component';
import {AppHeaderComponent} from './app/components/app-header/app-header.component';
import {AppRootComponent} from './app/components/app-root/app-root.component';
import {AppShellComponent} from './app/components/app-shell/app-shell.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';
import {TodoFormComponent} from './app/components/create_todo_form/create_todo_form.component';

angular.module('app.components')
	.component('todoIndex', TodoIndexComponent)
	.component('editTodoForm', EditTodoFormComponent)
	.component('appHeader', AppHeaderComponent)
	.component('appRoot', AppRootComponent)
	.component('appShell', AppShellComponent)
	.component('resetPassword', ResetPasswordComponent)
	.component('forgotPassword', ForgotPasswordComponent)
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent)
	.component('createTodoForm', CreateTodoFormComponent);

