function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  for(const property in object) {
    if(hasOwneProperty(property)
      propCount = property;
    }
  // Пиши код выше этой строки
  return propCount;
}
