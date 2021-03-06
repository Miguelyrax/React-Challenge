import React from "react";
import { Redirect, Route } from 'react-router'
export const PrivateRoutes = ({
    isAuthenticated,
    Component,
    ...rest
}) => {
    return (
        <Route {...rest} component={(props)=>(
            (isAuthenticated) ? <Component {...props} />
                              : <Redirect to="/login" /> 
             
        )}
        
        />
    )
}
