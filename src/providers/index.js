import { SelectMenuProvider } from "./SelectMenu";

const Providers = ({ children }) => {
  return (
    <>
      <SelectMenuProvider>{children}</SelectMenuProvider>
    </>
  );
};

export default Providers;
