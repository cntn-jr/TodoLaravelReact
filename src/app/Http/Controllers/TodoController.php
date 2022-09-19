<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index(){
        $todos = Todo::all();
        return response()->json($todos);
    }

    public function store(Request $request){
        header("Access-Control-Allow-Origin: *");
        $todo = new Todo();
        $todo->title = $request->title;
        $todo->detail = $request->detail;
        $todo->save();
    }

    public function getTodo(Request $request){
        $todo = Todo::find($request->id);
        return response()->json($todo);
    }
}
