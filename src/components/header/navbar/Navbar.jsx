const Navbar = ({item}) => {
    const {path,element} = item
    return (
        <div>
            <div className="font-semibold">
                <a href={element}>{path}</a> 
            </div>
        </div>
    );
};

export default Navbar;