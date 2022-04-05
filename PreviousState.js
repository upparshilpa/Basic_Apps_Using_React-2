class Counter extends React.Component {
    state = {
        count: 0
    };
    incrementCount = () => {
        this.setState((prevState,Props) => ({
            count : prevState.count +props.increment 
        }));
    }
    render () {
        setTimeout(this.increment,1500)
        return (
            <div>
                <div className= "circle">
                    {this.state.count}
                    </div>
                
            </div>
        );
    }
    }
    ReactDOM.render(<Counter increment = {2} />, document.getElementById('previous-state'));
