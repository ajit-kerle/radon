const printDate=function(){
    const d=new Date()
    console.log("Current Date:"+d.getDate())
}
const printMonth=function(){
    const d=new Date()
    console.log("current month: "+d.getMonth())
}
const getBatchInfo=function(){
    let bname="radon"
    let bdetail="w3d1"

    
    console.log(bname+","+bdetail+","+"the topic for today is Nodejs module system")
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo