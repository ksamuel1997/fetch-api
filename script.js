function getAllStudents(event)
{
    fetch('http://localhost:3000/student')
    .then(response =>{
        if(response.status==200) 
        {
            return Promise.resolve(response.json())
        }
        else
        {
            return Promise.reject(new Error('unable to fetch the data'));
            
        }
    })

    //ippo got the data
    .then(StudentList =>{
        
        const tbody = document.getElementsByTagName('tbody')[0];
        let stdInnerHtml='';
        StudentList.forEach(student => {
        
stdInnerHtml = stdInnerHtml + `
            <tr>
                <td>
                    ${student.name}
                </td>
                <td>
                    ${student.contactno}
                </td>
                <td>
                    ${student.email}
                </td>
                <td>
                    <button class="btn btn-primary" 
                    onClick=updateStudentInfo(${student.id})>Update</button>
                </td>
                <td>
                <button class="btn btn-primary" 
                onClick=removeStudentInfo(${student.id})>Remove</button>
                </td>
            </tr>
        `;
        tbody.innerHTML=stdInnerHtml;
        });

    })
    .catch(err =>{
        console.log(err);
    })

}
    function addStudentToJSON(event)
    {
            event.preventDefault();
             const name = document.getElementById('name').value;
             const contactno = document.getElementById('contactno').value;
             const email = document.getElementById('email').value;

             const stdobj=
            {
                 "name":name,
                 "contactno":contactno,
                "email":email
                      
            }
            console.log(stdobj.name);
            console.log(stdobj.contactno);
            console.log(stdobj.email);
    fetch('http://localhost:3000/student',{
        method:'POST',
        body:JSON.stringify(stdobj),
        header:{
            'content-type':'application/json'
        }
    })
    .then(response =>{
      alert("Record Added");

    })
    .catch(err =>{
        console.log(err);
    })
    
    getAllStudents();
    }
   
