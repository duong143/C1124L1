import React from 'react';
import ShowMessage from './showMessage';

function Example1() {
    const title = "Helloooooooo";
    const description = "Worlddddddd is the hahaha";

    const menuInfo = {
        title: "Menu",
        description: "Menu is the best",
        price: 10
    }

     const menuItem = ["home", "about", "contact"];

    const menu = {
        "home": "Home",
        "about": "About",
        "contact": "Contact"
    }
    return (
        <ShowMessage menuInfo={menuInfo} items={menuItem} />
    );
}

export default Example1;
