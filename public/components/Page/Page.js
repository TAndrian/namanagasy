/*
    The model for every page
*/

import React from "react";
import Nav from "../Nav/Nav";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

function Page(props) {
	const page = props.page ? props.page : 0;
    const children = props.children;
    return (
        <main>
        	<Nav page={page} />
            {children}
            <Contacts />
            <Footer />
        </main>
    );
}

export default Page;