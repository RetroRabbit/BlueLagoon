var crypto=require("crypto");

exports.encrypt=function(text){
  var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

exports.decrypt=function(text){
  var decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
