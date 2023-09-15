
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
  <ul>
    {props.students.map((objectFromSrudentsArray:StudentType)=>{
      return(
      <li key={objectFromSrudentsArray.id}>
        <span>{objectFromSrudentsArray.id} </span>
        <span>{objectFromSrudentsArray.name} </span>
        <span>age: {objectFromSrudentsArray.age}</span></li>
      )
    })}
  </ul>
 )
}