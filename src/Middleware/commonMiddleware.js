
const mid1=async function(req,res,next){
    let temp=[]
 let times=new Date()
 let ipAddress=req.ip
 let apiPath=req.path
 temp.push(times,ipAddress,apiPath)
 console.log(temp)
 next()
}

module.exports.mid1=mid1