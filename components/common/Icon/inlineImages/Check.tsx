type PropsType = {
    className?: string
  };
export default function Check({className}: PropsType) {
  return (
    <svg className={`strokeImg ${className}`} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" strokeWidth="2"/></svg>
  );
}