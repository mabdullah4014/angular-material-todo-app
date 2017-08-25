<?php

namespace App\Http\Controllers;
use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
	public function store(Request $request)
  	{
    	$this->validate($request, [
    		'name'  => 'required',
        	'description' => 'required',
		]);
      	$todo = new Todo;
  		$todo->name = $request['name'];
 		$todo->description = $request['description'];
 		if($request['completed']){
 			$todo->completed = $request['completed'];
 		}
 		else{
 			$todo->completed = false;
 		}
      	$todo->save();
      	return response()->success(compact('todo'));
  	}
  	public function update($id,Request $request)
  	{
    	$this->validate($request, [
    		'name'  => 'required',
        	'description' => 'required',
		]);
		if($id>0){
	      	$todo = Todo::find($id);
	      	if($todo){
	  			$todo->name = $request['name'];
	 			$todo->description = $request['description'];
		 		if($request['completed']){
		 			$todo->completed = $request['completed'];
		 		}
		 		else{
		 			$todo->completed = false;
		 		}
	      		$todo->save();
	      	}
		}
      	return response()->success(compact('todo'));
  	}

  	public function index(Request $request)
  	{
  		$todos=Todo::all();
      	return $todos;
  	}

    public function show($id)
    {
      // if($id>0){
          $todo = Todo::find($id);
        // }
          return $todo;
    }

    public function destroy($id,Request $request)
    {
      // if($id>0){
          Todo::find($id)->delete();
        // }
          $todos=Todo::all();
        return $todos;
    }
}
