const Wallet = require("../../model/wallet");
const userSchema = require("../../model/customerAccount");

  
exports.addandremoveMoneyincustomer = async (req, res) => {
    if(req.body.addbalance){
    const wallet = await Wallet.findOne({user: req.params.user });
    
    if(wallet == null){
      res.status(400).json({
        message: "Wallet is Not Created "
      })
    
    }else{
     wallet.balance = parseInt(wallet.balance) + parseInt(req.body.addbalance);
   
    //console.log(wallet.balance)
     const w = await wallet.save();
     const user1=await userSchema.findByIdAndUpdate({_id:wallet.user},{wallet:wallet.balance},{new:true})
   
    res.status(200).json({
      status: "success",
     data: [w,user1]
    });
  }
  }
  if(req.body.removebalance){
  
  const wallet = await Wallet.findOne({user: req.params.user });
  
  if(parseInt(wallet.balance) <parseInt(req.body.removebalance) ){ return res.status(400).json({msg:"insuffient balance"}); 
  }else{
  
  
  wallet.balance = parseInt(wallet.balance) - parseInt(req.body.removebalance)
  
  //console.log(wallet.balance);
  const w = await wallet.save();
  
  const user1=await userSchema.findByIdAndUpdate({_id:wallet.user},{wallet:wallet.balance},{new:true})
   
    res.status(200).json({
      status: "success",
     data: [w,user1]
    })
  };
  }
  }
  