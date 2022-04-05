class Employee extends React.Component{
    render() {
        return(
            <div className='employee'>
                <span className="name">{this.prop.firstname}</span>
                <span className="name">{this.prop.lastname}</span>
        </div>
        );
    }
}

class Company extends React.Component{
    get_name() {
        return {'firstname' : 'Alice', 'lastname': 'chang'}
    }
    render(){
        return(
            <div className="company">
                <Employee firstname ="john" lastname = "rivers" />
                <Employee firstname ={"shilpa"} lastname = {"uppar"} />
                <Employee firstname = {"ra" + "ni"} lastname = {"nandi" + "hal"}/>
                <Employee firstname = {this.get_name().firstname} lastname = {this.get_name().lastname}/>

            </div>
        );
    }
}
ReactDom.rendr(<Company />, document.getElementaById('react-nested-prop'));