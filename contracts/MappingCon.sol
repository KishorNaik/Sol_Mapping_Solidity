//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MappingCon{

    // State Variable Mapping
    // mapping(key=>value)
    mapping(uint=>string) public empMapping;

    function setEmp(uint _key,string memory _value) public {
        empMapping[_key]=_value;
    }

    function getEmp(uint _key) public view returns(string memory){
        return empMapping[_key];
    }

    
}

contract MappingStruct{
    struct Employee{
        string fullName;
        uint age;
    }

    mapping(address => Employee) public empMapping;

    function setEmp(address _address, string memory _fullName,uint _age) public {
        empMapping[_address]=Employee(_fullName,_age);
    }

    function getEmp(address _address) public view returns (Employee memory){
        return empMapping[_address];
    } 
}