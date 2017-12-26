<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;

// class Demo extends CI_Controller {
//     public function index() {
//         $this->json([
//             'code' => 0,
//             'data' => [
//                 'msg' => 'Hello World hahah'
//             ]
//         ]);
//     }
// }
class Demo extends CI_Controller {
    public function index() {
      $res = DB::insert('book',[
        'id'=>132,
        'name'=>'找朋友',
        'price'=>88
        ]);
}
}
