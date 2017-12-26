<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MailTraces extends CI_Controller {
    public function index() {
      $mailNum = $_GET['mailNum'];
      $method = 'GET';
      //测试单号  1000854132092
$host = 'http://211.156.193.140:8000';
$path = '/cotrackapi/api/track/mail/' . $mailNum;
$url = $host . $path;

$headers = array();
array_push($headers, "version:ems_track_cn_1.0");
array_push($headers, "authenticate:jsmobile_c8c8jk890qws");
array_push($headers, "Content-Type:application/json; charset=UTF-8");

$curl = curl_init();
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_FAILONERROR, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, true);

if (1 == strpos("$" . $host, "https://")) {
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
}


$data = curl_exec($curl);
curl_close($curl);
$data = '{"'.substr($data, strpos($data, 'traces'));
// exit($data);
return $data;

    }
}