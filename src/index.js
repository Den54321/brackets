module.exports = function check(str, bracketsConfig) {
  newStr = str;
  for(let i = 0; i < bracketsConfig.length; i++)
  {
    for(let j = 0; j < str.length; j++)
    {
      if(bracketsConfig[i][0] == str[j] && bracketsConfig[i][1] == str[j + 1])
      {
        str = str.replace(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`,'');
        i = -1;
        break;
      }  
    }                 
  }
  return str === "" ? true : false;
}
