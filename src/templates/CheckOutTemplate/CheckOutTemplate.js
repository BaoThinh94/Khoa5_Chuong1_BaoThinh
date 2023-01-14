import { Fragment } from "react";
import { Route } from "react-router-dom";




export const CheckOutTemplate = (props) => {
    const {Component, ...restProps} = props;
    return <Route {...restProps} render = { (propsRoute) => {
        return<Fragment>
            <Component {...propsRoute}/>
        </Fragment>
    }} 
    />
}