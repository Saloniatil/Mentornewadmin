import React from 'react';
import { Link } from 'react-router-dom';

const CategoryWidget =()=> {

        return(
            <div className="card category-widget">
            <div className="card-header">
                <h4 className="card-title">Blog Categories</h4>
            </div>
            <div className="card-body">
                <ul className="categories">
                    <li><Link to="#0">HTML <span>(62)</span></Link></li>
                    <li><Link to="#0">CSS <span>(27)</span></Link></li>
                    <li><Link to="#0">Photoshop <span>(41)</span></Link></li>
                    <li><Link to="#0">Java Script <span>(16)</span></Link></li>
                    <li><Link to="#0">Wordpress <span>(55)</span></Link></li>
                    <li><Link to="#0">VB <span>(07)</span></Link></li>
                </ul>
            </div>
        </div>
        );
    }

export default CategoryWidget;