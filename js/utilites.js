function textInner(elements, value){
  const element = document.getElementById(elements);
  element.innerText = value
  }
  
  // parseInt
  function setTextParseInt(elements){
      const element = document.getElementById(elements);
      const convertElement = element.innerText;
      const parseIntValue = parseInt(convertElement);
      return parseIntValue;
  }
  
  // disabled btn
  function disabledByBtn(elements){
      const element = document.getElementById(elements);
      element.setAttribute("disabled", true);
  }
  // enable btn
  function enabledByBtn(elements){
      const element = document.getElementById(elements);
      element.removeAttribute("disabled", true);
  }
  
  // hidden class remove
  function setHiddenRemoveClass(elements){
      const element = document.getElementById(elements);
      element.classList.remove("hidden");
  }
  
  // hidden class add class use
  function setHiddenAddClass(elements, inputs){
      const element = document.getElementsByClassName(elements);
      const input = document.getElementById(inputs).value.length;
      for(const hide of element){
          if(input > 0){
              hide.classList.add("hidden");
          }
      }
  }