import React, { Component } from 'react';

const Footer = () => {
    // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("movetop").style.display = "block";
    } else {
      document.getElementById("movetop").style.display = "none";
    }
  }

    const topFunction = () => {
       
        // When the user clicks on the button, scroll to the top of the document
             document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          

    }

    return (
        <div>
            <div className="copyright py-sm-5 py-4 text-center">
                <div className="container">
                    <p className="copy-footer-29">© 2021 Portfolio HCL. All rights reserved | Design by <a
                        href="">Shivam Pathak</a></p>
                </div>
            </div>
            {/*move top */}
            <button onClick={topFunction} id="movetop" title="Go to top">
                <span className="fa fa-angle-up"></span>
            </button>
        </div>
    );

}

export default Footer;
