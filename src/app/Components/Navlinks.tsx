import Link from 'next/link';

interface MyComponentProps {
  href: string; 
  title: string; 
}

const Navlinks: React.FC<MyComponentProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="hover:border-b hover:border-slate-600 transform transition duration-500 border-b border-b-transparent lg:mx-8"
    >
      {title}
    </Link>
  );
};

export default Navlinks;
