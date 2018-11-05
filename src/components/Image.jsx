import React from 'react';

function Image({ src }) {
    const style = { backgroundImage: `url(${src})` };

    return <img className="image" src={src}/>
    //<div className="image" style={style}></div>
}

export default Image;