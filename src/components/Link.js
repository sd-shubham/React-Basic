import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames'

function Link({ to, children, cls,activeClassName }) {
  const { navigate, currentPath } = useNavigation()
  const classes = classNames('text-blue-500',cls,
  currentPath === to && activeClassName);
  const handler = (event) => {
    if(event.metaKey || event.ctrlKey){
        return;
    }
    event.preventDefault();
    navigate(to);
  };
  return <a className={classes} onClick={handler} href={to}>{children}</a>;
}
export default Link;
