// Write your solution in this file!
const employee = {
    name : "Bob",
    streetAddress : "Quivas Rd ",
}; 
    function updateEmployeeWithKeyAndValue(employeeObject,Key,Value){
                const employeeObject2 ={...employeeObject} 
                employeeObject2[Key] = Value; 
                return employeeObject2
                

    } 
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value; 
        return employee

    } 
    function deleteFromEmployeeByKey(employee, key){
      const employee2 ={...employee} 
      delete employee2[key]
      return employee2 }

      function  destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key]
        return employee
      }
    


    