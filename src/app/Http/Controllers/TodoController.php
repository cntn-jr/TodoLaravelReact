<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index(){
        $todo = Todo::all();
        return response()->json($todo);
    }

    public function store(Request $request){
        header("Access-Control-Allow-Origin: *");
        $todo = new Todo();
        $todo->title = $request->title;
        $todo->detail = $request->detail;
        $todo->save();
    }
}
