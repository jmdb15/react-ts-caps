import { ReactNode } from "react";

interface ChildProps{
  color: string;
  onClick: () => void;
  children?: ReactNode | undefined;
}

export const Child = ({color, onClick}: ChildProps) => {
  return <div>
    Hi there, {color}!
    <button onClick={onClick}>Click me! </button>
  </div>;
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (<div>
    Hi there, {color}!
    {children}
    <button onClick={onClick}>Click me! </button>
  </div>);
}

/*
1. interface ChildProps extends PropsWithChildren{...}
2. const ChildAsFC: React.FC<PropsWithChildren<ChildProps>>
3. children?: ReactNode | undefined;
*/