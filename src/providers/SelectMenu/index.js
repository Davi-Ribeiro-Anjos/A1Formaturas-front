const { createContext, useContext, useState } = require("react");

const SelectMenuContext = createContext();

export const SelectMenuProvider = ({ children }) => {
  const [selectMenu, setSelectMenu] = useState({
    main: false,
    aboutUs: false,
    graduationArea: false,
    promotion: false,
    contact: false,
    map: false,
  });
  const [selectSub, setSelectSub] = useState({
    graduationArea: {
      register: false,
      invitationPhoto: false,
      updateRegister: false,
    },
  });

  return (
    <SelectMenuContext.Provider
      value={{ selectMenu, setSelectMenu, selectSub, setSelectSub }}
    >
      {children}
    </SelectMenuContext.Provider>
  );
};

export const useSelectMenu = () => useContext(SelectMenuContext);
