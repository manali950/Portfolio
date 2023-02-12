import React from 'react';

import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/plugins/slimScroll/jquery.slimscroll.min.js';
import 'admin-lte/plugins/fastclick/fastclick';
import 'admin-lte/dist/js/adminlte';
import 'admin-lte/dist/js/demo';

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
