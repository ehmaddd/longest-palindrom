var longestPalindrome = function(s) {
  const pal = [];
  for(let i=0; i<s.length; i++){
    for(let j=i; j<s.length; j++){
      if(s[i]==s[j]){
        let str = '';
        for(let k=i; k<=j; k++){
          str += s[k];
        }
        pal.push(str);
        str = '';
      }
    }
  }
  let max = pal[0];
  for(let i=1; i<pal.length; i++){
    if(pal[i].length > max.length) {
      max = pal[i];
    }
  }
  console.log(max);
};

longestPalindrome("babad");
