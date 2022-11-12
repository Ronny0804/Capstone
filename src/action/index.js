export const addName = (value) => {
    console.log(value);
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime().toString(),
          value: value
      },
    };
  }
  
  export const addImg = (allImg) => {
    console.log(allImg);
    return {
      type: 'ADD_IMG',
      payload: {
        id: new Date().getTime().toString(),
        value:allImg
      },
    };
  }

  export const addbagImg = (allbagImg) => {
    console.log(allbagImg);
    return {
      type: 'ADDBAG_IMG',
      payload: {
        id: new Date().getTime().toString(),
        value:allbagImg
      },
    };
  }

  export const addMenu = (allMenu) => {
    
    return {
      type: 'ADD_MENU',
      payload: {
        id: new Date().getTime().toString(),
        value:allMenu
      },
    };
  }

  export const addTemplate = (templateID,component) => {
    console.log(component)
    return {
      type: 'ADD_TEMPLATE',
      payload: {
        id: new Date().getTime().toString(),
        value:templateID,
        component
      },
    };
  }
  
  