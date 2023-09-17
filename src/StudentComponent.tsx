
type StudentComponentType={
  students: Array<StudentType>
}

type StudentType = {
  id: number
  name: string
  age: number
}

export function StudentComponent (props:StudentComponentType){
  
return(
  <table >
    <tr>
    <td>ID</td>
    <td>NAME</td>
    <td>AGE</td>
    </tr>
    {props.students.map((objectFromSrudentsArray:StudentType)=>{
      return(
        <tr key={objectFromSrudentsArray.id}>
          <td><span>{objectFromSrudentsArray.id}</span></td>
          <td><span>{objectFromSrudentsArray.name}</span></td>
          <td><span>{objectFromSrudentsArray.age}</span></td>
        </tr>
      )
    })}
  </table>
)
}