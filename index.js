// Code your solution here
function findMatching(drivers, name){
const matching = drivers.filter(driver => name.toLowerCase() === driver.toLowerCase())
return matching
} 
function fuzzyMatch(drivers, name){
    const matching = drivers.filter(driver => driver.startsWith(name))
    return matching
}
function matchName(drivers, name){
const matching = drivers.filter(driver => driver.name === name)
return matching
}