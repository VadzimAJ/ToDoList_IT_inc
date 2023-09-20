import React, {useState} from "react"
import { NumberTypeAnnotation } from "@babel/types"
import { Button } from "./Button"

type MoneyComponentType={
  money: Array<MoneyType>
}

type MoneyType = {
  banknots: string
  value: number
  number: string
  
}

type FilterType = {
  title: 'ALL' | 'Dollars' | 'RUBLS'
}
export function MoneyComponent (props:MoneyComponentType,){

  let [filter, seFilter] = useState<FilterType> ('ALL')
  

  let currentMoney = props.money;

  if (filter === 'Dollars') {
    currentMoney = props.money.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
  }
  if (filter === 'RUBLS') {
    currentMoney = props.money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS');  
}

const ButtonFoo = ( title: string) => {
  let useMopney = title;
  seFilter(useMopney);
}

return(
  <div>
    <table >
        <thead>
          <tr >
            <td><b>Banknots__</b></td>
            <td><b>Value__</b></td>
            <td><b>Number</b></td>
          </tr>
        </thead>
        <tbody>
          {currentMoney.map((objectFromMoneyArray:MoneyType, index: number)=>{
            return(
              <tr key={index}>
                <td><span>{objectFromMoneyArray.banknots}</span></td>
                <td><span>{objectFromMoneyArray.value}</span></td>
                <td><span>{objectFromMoneyArray.number}</span></td>
              </tr>
            )
          })}
        </tbody>    
      </table>
      <Button title={'Dollars'} callBack={(title) => ButtonFoo(title)}/>
      <Button title={'RUBLS'} callBack={(title) => ButtonFoo(title)}/>
      <Button title={'ALL'} callBack={(title) => ButtonFoo(title)}/>
  </div>
  
)
}