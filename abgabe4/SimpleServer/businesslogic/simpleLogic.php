<?php
include("db/dataHandler.php");

class SimpleLogic
{
    private $dh;
    function __construct()
    {
        $this->dh = new DataHandler();
    }

    function handleRequest($method, $param)
    {
        switch ($method) {
            case "queryPersons":
                $res = $this->dh->queryPersons();
                break;
            case "queryPersonById":
                $res = $this->dh->queryPersonById($param);
                break;
            case "queryPersonByName":
                $res = $this->dh->queryPersonByName($param);
                break;
            case "queryPersonByEmail":
                $res = $this->dh->queryPersonByEmail($param);
                break;
            case "queryPersonByDepartment":
                $res = $this->dh->queryPersonByDepartment($param);
                break;
            case "addPerson":
                $res = $this->dh->addPerson($param);
                break;
            case "updatePerson":
                $res = $this->dh->updatePerson($param);
                break;  
            case "deletePerson":
                $res = $this->dh->deletePerson($param);
                break;      
            default:
                $res = null;
                break;
        }
        return $res;
    }
}
