var Panel = ReactBootstrap.Panel, Accordion = ReactBootstrap.Accordion;
var Button = ReactBootstrap.Button, Input = ReactBootstrap.Input;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Modal = ReactBootstrap.Modal;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var ListGroup = ReactBootstrap.ListGroup,ListGroupItem = ReactBootstrap.ListGroupItem;
// EmployeeTable class. This holds all recipes.

var EmployeeTable = React.createClass({
    render: function() {
        return (
            <div>
            <Accordion>
                {this.props.data}
            </Accordion>
        </div>
        );
    }
});
// Employee class. This is the display for a employee in EmployeeTable
var Employee = React.createClass({
    remove: function() {
        employees.splice(this.props.index, 1);
        update();
    },
    edit: function() {
        globalName = this.props.name;
        globaldescription = this.props.description;
        document.getElementById("show").click();
    },
    render: function() {
        return (
            <div>
                <h4 className="text-center">More Informations</h4><hr/>
                <InformationList informations = {this.props.description} />
                <ButtonToolbar>
                    <Button class="delete" bsStyle="danger" id={"btn-del"+this.props.index} onClick={this.remove}>Delete</Button>
                    <Button bsStyle="default" id={"btn-edit"+this.props.index} onClick={this.edit}>Edit</Button>
                </ButtonToolbar>
            </div>
        );
    }
});

// InformationList class. This lists all information for a Employee
var InformationList = React.createClass({
    render: function() {
        var informationList = this.props.informations.map(function(information) {
            return (
                <ListGroupItem>
                    {information}
                </ListGroupItem>
            );
        });
        return (
            <ListGroup>
                {informationList}
            </ListGroup>
        );
    },
});

// EmployeeAdd class. This contains the Modal and Add Employee button
var EmployeeAdd = React.createClass({
    getInitialState: function() {
        return { showModal: false };
    },
    close: function() {
        globalName = "";
        globaldescription = [];
        this.setState({ showModal: false });
    },
    open: function() {
        this.setState({ showModal: true });
        if (document.getElementById("title") && document.getElementById("informations")) {
            $("#title").val(globalName);
            $("#informations").val(globaldescription);
            if (globalTitle != "") {
                $("#modalTitle").text("Edit Employee");
                $("#addButton").text("Edit Employee");
            }
        }
        else requestAnimationFrame(this.open);
    },
    add: function() {
        var title = document.getElementById("title").value;
       /* var ingredients = document.getElementById("informations").value.split(",");*/
        var ingredients = document.getElementById("informations");
        var exists = false;
        /*for (var i = 0; i < recipes.length; i++) {
            if (recipes[i].title === title) {
                recipes[i].ingredients = ingredients;
                exists = true;
                break;
            }
        }*/
        /*if (!exists) {
            if (title.length < 1) title = "Untitled";
            recipes.push({title: title, ingredients: document.getElementById("ingredients").value.split(",")});
        }*/
        update();
        this.close();
    },
    render: function() {
        return (
            <div>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open}
                    id="show"
                >
                    Add Employee
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modalTitle">Add an Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <Input type="text" label="Name" placeholder="Employee Name" id="title" />
                            <Input type="textarea" label="Informations" placeholder="Enter Informations" id="informations"/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.add} bsStyle="primary" id="addButton">Add Employee</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

// Update function to display all the recipes
function update() {
    localStorage.setItem("recipeBook", JSON.stringify(recipes));
    var rows = [];
    for (var i=0; i < recipes.length; i++) {
        rows.push(
            <Panel header={recipes[i].title} eventKey={i} bsStyle="success">
                <Recipe title={recipes[i].title} ingredients={recipes[i].ingredients} index={i}/>
            </Panel>
        );
    }
    ReactDOM.render(<RecipeBook data={rows}/>, document.getElementById("container"));
}

// Render the add button (and modal)
ReactDOM.render(<RecipeAdd/>, document.getElementById("button"));
update(); // Initially render the recipe book



