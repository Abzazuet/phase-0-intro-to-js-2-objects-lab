const employee = {
    name: "Abel",
    streetAddress: "1161 Surf Crest Dr",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee
}
function deleteFromEmployeeByKey(obj, key){
    const newObj = {...employee};
    delete newObj[key];
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj
}
