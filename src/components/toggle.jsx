const Toggle = ({isToggle,handleToggle}) => {
    let classes = "fa fa-toggle-";
    classes += isToggle ? "on" : "off";
    return (
        <i className={classes} aria-hidden="true" onClick={handleToggle}></i>
      );
}
 
export default Toggle;