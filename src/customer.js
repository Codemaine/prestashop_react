import React,{Component} from 'react';

class Customer extends Component
{
 render(){

    return(
        <>
        <div className="part">
            <div className="customer-part"><div>customer</div></div>
            <div className="customer-part"><div>company</div></div>
            <div className="customer-part"><div>Address new</div></div>
        </div>
        <div className="work">
            <div className="employe-part"><div>Work from Home</div></div>
            <div className="employe-part"><div>work from Office</div></div>
        </div>
        <div className="banner">
            <div className ="custom-text">Create new prestashop application using react </div>
        </div>
        <div className="adress">
            <div className="address-part"><div>cuddalore</div></div>
            <div className="address-part"><div>pondicherry</div></div>
        </div>
        </>
    )

}
}

export default Customer;