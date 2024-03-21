interface CarGridProps {
  children: React.ReactNode;
}

export const CarGrid: React.FC<CarGridProps> = ({ children }) => {
  return <div className="flex items-center flex-col"> {children}</div>;
};
