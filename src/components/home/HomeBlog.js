import React, { Component } from 'react'

export default class HomeBlog extends Component {
    render() {
        return (
            <section className="w3l-blog-slider" id="blog-slider">
                {/*main-slider */}
                <div className="blog-slider py-5">
                    <div className="container pt-lg-4 pt-md-3 mb-md-0 mb-md-5">
                        <div className="contact-heading text-center mb-md-5 mb-4">
                            <span className="text">My Blog </span>
                            <h3 className="title-big">Some of my <span> Blog posts</span></h3>
                        </div>
                        <div className="owl-testimonial owl-carousel owl-theme mb-lg-5 mb-4 pb-lg-3">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="blog-single.html">
                                            <img className="card-img-bottom d-block radius-image-full" src="assets/images/curd.png"
                                                alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="col-lg-6 blog-details align-self mt-lg-0 mt-4">
                                        <a href="https://www.javatpoint.com/firebase-realtime-database-update-and-delete" className="blog-desc-big">Welcome to React. This is my first post. Edit or delete it.
                                        </a>
                                        <p>we learned how we could read and write data into the database. Now, we will learn how we can modify and delete the data from the database.
                                            If we want to write to a specific child of a node without overwriting other child nodes, we use the updateChildren() method. When we call
                                            updateChildren(), we can update lower-level child values by specifying a path for the key.</p>
                                        <div className="author align-items-center mt-4 mb-1">
                                            <a href="https://appletsoftech.business.site/">Shivam Pathak</a>  <a href="#url">Software Engineer</a>
                                        </div>
                                        <ul className="blog-meta">
                                            <li className="meta-item blog-lesson">
                                                <span className="meta-value"> March 08, 2022 </span>
                                            </li>
                                            <li className="meta-item blog-students">
                                                <span className="meta-value"> 15min to read</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="blog-single.html">
                                            <img className="card-img-bottom d-block radius-image-full" src="assets/images/react.jpeg"
                                                alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="col-lg-6 blog-details align-self mt-lg-0 mt-4">
                                        <a href="https://nirobh753.medium.com/advance-react-part-1-953edb8a029c" className="blog-desc-big">What Else you need to reach the next level of React
                                        </a>
                                        <p>
                                        virtual Dom
                                        in the browser has Dom (document object model). browser always rendering and update with VDom.
                                         Then what is Virtual Dom in react? This Virtual dom concept is very simple. 
                                         React try to focus on that Try to best much less rendering in Dom. 
                                         Then it will be fast and Experience will be better than others. 
                                         In Virtual Dom react has his Others world. 
                                        In react world React create a Virtual Dom React just take two snapshots of Virtual dom and when 
                                        we change in the browser react just compear and change. So no need to render all the elements in the Dom.
                                        </p>
                                        <div className="author align-items-center mt-4 mb-1">
                                        <a href="https://appletsoftech.business.site/">Shivam Pathak</a>  <a href="#url">Software Engineer</a>
                                        </div>
                                        <ul className="blog-meta">
                                            <li className="meta-item blog-lesson">
                                                <span className="meta-value"> March 08, 2022 </span>
                                            </li>
                                            <li className="meta-item blog-students">
                                                <span className="meta-value"> 15min to read</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*main-slider*/}
            </section>

        )
    }
}
