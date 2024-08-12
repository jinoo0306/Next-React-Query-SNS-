import { layoutProps } from "@src/types/props";

function layout({ children, modal }: layoutProps) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

export default layout;
