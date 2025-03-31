<?php
include("./models/person.php");
class DataHandler
{
    public function queryPersons()
    {
        $res =  $this->getDemoData();
        return $res;
    }

    public function queryPersonById($id)
    {
        $result = array();
        foreach ($this->queryPersons() as $val) {
            if ($val[0]->id == $id) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByName($name)
    {
        $result = array();
        foreach ($this->queryPersons() as $val) {
            if ($val[0]->lastname == $name) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByEmail($email)
    {
        $result = array();
        foreach ($this->queryPersons() as $val) {
            if ($val[0]->email == $email) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByDepartment($department)
    {
        $result = array();
        foreach ($this->queryPersons() as $val) {
            if ($val[0]->department == $department) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    // add, update and delete ofc do not work because the data is mocked
    // addPerson is used to add a new mock person to the list.
    public function addPerson ($param)
    {
        $newPerson = new Person(
            count($this->getDemoData()) + 1,
            $param['firstname'],
            $param['lastname'],
            $param['email'],
            $param['phone'],
            $param['department']
        );

        $demodata = $this->getDemoData();
        array_push($demodata, [$newPerson]);

        return [$newPerson];
    }

    // put Person is used to update an existing mock person.
    public function updatePerson($param)
    {
        $demodata = $this->getDemoData();
        $result = [];
        foreach ($demodata as &$val) {
            if ($val[0]->id == $param['id']) {
                $val[0]->firstname = $param['firstname'];
                $val[0]->lastname = $param['lastname'];
                $val[0]->email = $param['email'];
                $val[0]->phone = $param['phone'];
                $val[0]->department = $param['department'];
            }
            $result[] = $val;
        }
        return $result;
    }

    // delete Person is used to remove a mock person from the list
    public function deletePerson($param)
    {
        $demodata = $this->getDemoData();
        $result = array_filter($demodata, function ($val) use ($param) {
            return $val[0]->id != $param['id'];
        });

        $result = array_values($result);

        return $result;
    }

    private static function getDemoData()
    {
        $demodata = [
            [new Person(1, "Jane", "Doe", "jane.doe@fhtw.at", 1234567, "Central IT")],
            [new Person(2, "John", "Doe", "john.doe@fhtw.at", 34345654, "Help Desk")],
            [new Person(3, "baby", "Doe", "baby.doe@fhtw.at", 54545455, "Management")],
            [new Person(4, "Mike", "Smith", "mike.smith@fhtw.at", 343477778, "Faculty")],
        ];
        return $demodata;
    }
}
