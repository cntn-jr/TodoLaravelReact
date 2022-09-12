<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1; $i < 6; $i++){
            DB::table('todos')->insert([
                'title' => 'テスト'.$i,
                'detail' => 'テスト'.$i.'です。'
            ]);
        }
    }
}
