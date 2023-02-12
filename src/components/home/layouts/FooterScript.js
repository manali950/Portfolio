import React from 'react';

//  import  "jquery";
   import "owl.carousel";
  import "bootstrap";

// Create the function
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}


function FooterScript() {
    return (
        <div>
            {/* Call the function to add a library */}
            {/*AddLibrary(
            'https://code.jquery.com/jquery-3.3.1.min.js')*/}
        </div>
    )
}

export default React.memo(FooterScript);
