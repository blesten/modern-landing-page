interface IProps {
  title: string
  link: string
  active: boolean
}

const NavLink = ({ title, link, active }: IProps) => {
  return (
    <a href={link} className={`${active ? 'opacity-100 font-medium after:scale-x-100' : 'opacity-60 font-normal after:scale-x-0'} outline-none transition relative hover:opacity-100 hover:font-medium after:absolute after:content-[] after:w-2/3 after:h-[2px] after:bg-white after:top-full after:mt-1 after:left-1/2 after:-translate-x-1/2 hover:after:scale-x-100 after:transition`}>
      {title}
    </a>
  )
}

export default NavLink