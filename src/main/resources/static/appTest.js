
var Employee = React.createClass({
    getInitialState: function() {
        return {display: true };
    },
    handleDelete() {
        var self = this;
        $.ajax({
            url: self.props.employee._links.self.href,
            type: 'DELETE',
            success: function(result) {
                self.setState({display: false});
            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });
    },
    render: function() {
        if (this.state.display==false) return null;
        else return (
            <tr>
            <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.lastName}</td>
        <td>{this.props.employee.age}</td>
        <td>{this.props.employee.description}</td>
        <td>
        <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
        </td>
        </tr>
        );
    }
});
var EmployeeTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.employees.forEach(function(employee) {
            rows.push(<Employee employee={employee} />);
        });
        return (
            <div className="container marginadd">
            <table className="table table-striped">
            <thead>
            <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Description</th>
            <th>Del</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
            </table>
            </div>);
    }
});
var App = React.createClass({

    loadEmployeesFromServer: function () {
        var self = this;
        $.ajax({
            url: "http://localhost:8013/api/employees"
        }).then(function (data) {
            self.setState({employees: data._embedded.employees});
        });
    },

    getInitialState: function () {
        return {employees: []};
    },

    componentDidMount: function () {
        this.loadEmployeesFromServer();
    },

    render() {
        return ( <EmployeeTable employees={this.state.employees}/> );
    }
});

ReactDOM.render(
<App />, document.getElementById('root')
);