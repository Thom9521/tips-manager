<?php
include_once dirname(__DIR__) . '/config/Cors.php';
include_once dirname(__DIR__) . '/config/DatabaseService.php';

class Matches
{
    public $data;

    public function __construct(string $data)
    {
        $this->data = $data;
    }
}
