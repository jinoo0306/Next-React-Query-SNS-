import { Layout } from "@src/types/Layout";

function layout({ children, modal }: Layout) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

export default layout;
