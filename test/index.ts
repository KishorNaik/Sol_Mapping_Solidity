import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Mapping-Example", function () {
  it("#Test1 - Mapping => Set => Get", async function () {
    const Contract = await ethers.getContractFactory("MappingCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    await contract.setEmp(1,"Kishor Naik");
    await contract.setEmp(2,"Eshaan Naik");

    let empName:string=await contract.getEmp(2);

    expect(empName).to.equal("Eshaan Naik");
  });

  it.only("#Test2 - Mapping Struct=> Set => Get", async function () {

    const [owner,add1,add2] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("MappingStruct");
    const contract = await Contract.deploy();
    await contract.deployed();

    await contract.setEmp(owner.address,"Kishor Naik",36);
    await contract.setEmp(add2.address,"Yogesh Naik",12);
    await contract.setEmp(add1.address,"Eshaan Naik",6);


    let empName:any=await contract.getEmp(add1.address);
    console.log(`Employee Object => ${JSON.stringify(empName)}`);
    console.log(`Employee Name => ${empName.fullName}`);
    console.log(`Employee age => ${empName.age}`);

    expect(empName.fullName).to.equal("Eshaan Naik");
  });


});