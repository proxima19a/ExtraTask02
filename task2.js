const showSuccessMessage=(message) => {
   console.log(message);
}
const showErrorMessage=(message) => {
   console.error(message);
}
const checkTextOnErrorSymbol=(text, errorSymbol, successCallback, errorCallback) => {
   let countErrors=0;
   for (let i=0; i<text.length; i++) {
      
      if (text[i]===errorSymbol && errorCallback) {
         errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}`);
         countErrors++;
      } 
    
   } 
   if (successCallback && countErrors===0) {
         successCallback('В данном тексте нет запрещенных символов');
   }  
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);