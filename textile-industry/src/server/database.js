// const { ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } = require("@angular/core");
// const Cloudant = require("@cloudant/cloudant");
const db=require("nano");
var url =
  "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/";
var username = "apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w";
var password = "e455d34a303110b468819fbc14388b5e";
 
// var cloudant = Cloudant({ url: url, username: username, password: password });
// var foodchain=cloudant.use('textile_industry');
const nano=db(url);
// data={
//   selector:{
//     id:'user',
//     password:'saraswathi'
//   }
// }
 
// insert = function (paramsvalue) {
//   console.log(paramsvalue);
//   cloudant
//     .use("textile_industry")
//     .insert(paramsvalue)
//     .then((data) => {
//       console.log("Data Inserted into Clouddatabase" + data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
create=function(id,dbname,){
  return nano.use(dbname).insert(id);
}
get=function(obj,dbname) {
  return nano.use(dbname).find(obj);
};
getId =function(id, dbname) {
  return nano.use(dbname).get(id);
};
del_id = function (id, id1, dbname) {
  return nano.use(dbname).destroy(id, id1);
};


module.exports = {get, getId,del_id,create };
