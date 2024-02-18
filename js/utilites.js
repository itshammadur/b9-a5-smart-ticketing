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