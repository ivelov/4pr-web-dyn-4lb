import React, { memo, useCallback, useMemo, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Display from "./Display";

const DisplayMemo = memo(Display)
const ButtonMemo = memo(Button)

const Parent = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(30);

  const incrementAge = () => {
    setAge(age + 5);
  };

  const incrementSalary = () => {
    setSalary(salary + 100);
  };

  const ageMemo = useMemo(
    () => age,
    [age]
  );

  const salMemo = useMemo(
    () => salary,
    [salary]
  );

  const ageCallback = useCallback(incrementAge, [age])
  const salCallback = useCallback(incrementSalary, [salary])
  
  return (
    <div>
      <Title />
      <DisplayMemo text="age" displayvalue={ageMemo} />
      <ButtonMemo handleClick={ageCallback}>Update Age</ButtonMemo>
      <DisplayMemo text="salary" displayvalue={salMemo} />
      <ButtonMemo handleClick={salCallback}>Update Salary</ButtonMemo>
    </div>
  );
};

export default Parent;
