import { Component } from "react";

export default class App extends Component
{
  constructor(){
    super()
    this.state = {
      students : [
        {Roll:101, Name:"Ankit", Age:28, Branch:"BE", Marks:244.44},
        {Roll:102, Name:"Sandeep", Age:23, Branch:"CS", Marks:222.34},
        {Roll:103, Name:"Sagar", Age:24, Branch:"ME", Marks:254.44},
        {Roll:104, Name:"Amit", Age:21, Branch:"BA", Marks:343.55},
        {Roll:105, Name:"Arun", Age:29, Branch:"MA", Marks:543.53},
      ]
    }
  }
  addStudent = (event)=>
  {
    this.setState({errMsg:" "})
    event.preventDefault()
    var Roll = this.rollbox.value
    var status = this.state.students.some(ob=>ob.Roll==Roll)
    if(status)
    {
      this.setState({errMsg:"Duplicate Roll Number...!"})
    }
    else{
   var ob ={
    Roll : this.rollbox.value,
    Name : this.namebox.value,
    Age : this.agebox.value,
    Branch : this.branchbox.value,
    Marks : this.marksbox.value
   } 
   this.setState({students:[...this.state.students,ob]})
   event.target.reset()
  }
}
  Delstudent = (Roll)=>
  {
    var status = window.confirm("Are You Sure to Delete Record..")
    if(status){
    this.setState({students:this.state.students.filter(ob=>ob.Roll!=Roll)})
  }
}
 update = ()=>
 {
  alert("Readonly")
 }
  render()
  {
    return<>
    <form onSubmit={this.addStudent}>
         <h1 className="alert-success text-center">Students Records</h1>
    <div className="container">
    <div className="row mt-3">
      <div className="col-xl-6 col-lg-6">
        <input type="number" ref={ob=>this.rollbox=ob} placeholder="Enter Roll number" className="form-control" required/>
         </div>
         <div className="col-xl-6 col-lg-6">
          <input type="text" ref={ob=>this.namebox=ob} placeholder="Enter Name" className="form-control" required/>
         </div>
              </div>
          <div className="row mt-3">
            <div className="col-xl-6 col-lg-6">
              <input type="number" ref={ob=>this.agebox=ob} placeholder="Enter Age" className="form-control" required/>
            </div>
            <div className="col-xl-6 col-lg-6">
              <select className="form-control" ref={ob=>this.branchbox=ob}>
                <option>select</option>
                <option>CS</option>
                <option>MA</option>
                <option>BA</option>
                <option>BE</option>
                <option>ME</option>
                 </select>
             </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-6 col-lg-6">
              <input type="number" step=".02" ref={ob=>this.marksbox=ob} placeholder="Enter Marks" className="form-control" required/>
            </div>
            
 
            <div className="col-xl-6 c0l-lg-6">
            <button  className="btn btn-success">Add-Student-Records</button>
           &nbsp; &nbsp;
            <b className="text-danger">{this.state.errMsg}</b>
          </div></div>
    </div>
    </form>
    <br/>
    <h6 className="text-success">Total No. of Students : {this.state.students.length}</h6>
    <hr/>
    <div className="container">
    
    <table className="table">
      <thead>
        <tr>
          <th>Roll</th>
          <th>Name</th>
          <th>Age</th>
          <th>Branch</th>
          <th>Marks</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {this.state.students.map(ob=><tr>
          <td>{ob.Roll}</td>
          <td>{ob.Name}</td>
          <td>{ob.Age}</td>
          <td>{ob.Branch}</td>
          <td>{ob.Marks}</td>
          <td>
            <button onClick={this.update} className="btn btn-success">Update</button> &nbsp; &nbsp;
            <button onClick={()=>this.Delstudent(ob.Roll)} className="btn btn-danger">Delete</button>
          </td>

        </tr>)}
            </tbody> </table>
            </div>
          
    </>
  }
}