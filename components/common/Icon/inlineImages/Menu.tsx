type PropsType = {
    className?: string
  };
export default function Menu({className}: PropsType) {
  return (
    <svg className={`strokeImg ${className}`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 12H20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 18H20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}