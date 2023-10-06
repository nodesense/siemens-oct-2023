import React, {RefObject, createRef} from 'react';

interface CheckoutProps {}

interface CheckoutState {
    firstName: string;
    city: string;
}

class Checkout extends React.Component<CheckoutProps,CheckoutState> {
    firstNameRef: RefObject<HTMLInputElement>;
    // constructor
    // optional
    // used for initialize state from props
    constructor(props: any) {
        super(props); // calling base class React.Component constructor
        console.log("Checkout page")

        // class component can have state
        // state is keyword for class component
        this.state = {
            firstName: '',
            city: ''
        }

        this.firstNameRef = createRef();
    }

    

    componentDidMount(): void {
        // usecase: susbcribe, start timer, make api call, access ref
        // called only once after first render/initial mount
        console.log("Checkout componentDidMount")

        // current is real dom element referencing to input element
        console.log("Ref Dom element ", this.firstNameRef.current)
        if (this.firstNameRef.current)
            this.firstNameRef.current?.focus();
    }

    componentDidUpdate(): void {
        // usecase: access the ref, access dom element
        // called after second render onwards, on update stage
        console.log("Checkout component did update")
    }

    componentWillUnmount(): void {
        // usecase: cleanup, unsubscribe, stop timer, stop pending api calls etc
        // called before destruction of component
        console.log("Checkout componenent will unmount")
    }




    handleChange = (e: any) => {
        console.log("handle change ", e)
        const {name, value} = e.target; // target is real dom, input / select elements
        console.log(name, value)

        // setState is internal function, to be used to set the change
        // setState will triger render function after state changes
        this.setState ( {[name]: value} as any)
    }

    // render keyword, called by react to create v.dom
    render() {
        console.log("Checkout render")
        return (
            <div>
                <h2>Checkout</h2>

                <form>
                    Name <input name="firstName" 
                                type="text" 
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                ref = {this.firstNameRef}
                                />

                    City <select name="city" 
                                value = {this.state.city} 
                                onChange={this.handleChange}
                                >
                             <option value="BLR">Blr</option>
                             <option value="MYS">Mysore</option>
                             <option value="CHE">Chennai</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Checkout;