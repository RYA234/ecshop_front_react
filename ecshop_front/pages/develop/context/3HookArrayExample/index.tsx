import { createContext, useState } from "react";
import ChildC from "./childC";

// Contextを作成
export const UserCount = createContext();

// 親コンポーネント
export default function Index() {
  const [counts, setCounts] = useState<number[]>([1, 2]);
  const addHandler = () => {
    // スプレッド構文で表現
    // count.push(1)でやるとエラーになる
    setCounts([...counts, 1]);
  };
  console.log("countsは"+counts);
  return (
    <>
      {counts.map((item: number, index: number) => {
        // useStateとindexを渡している
        // indexがないと、子コンポーネント側で自身の配列を特定できない
        const values = { counts, setCounts, index };
        return (
          // valuesの値をChildC側に渡している
          // 子コンポーネント１つにつき、別々のindexを渡すため、1つのContextを作成している。
          <UserCount.Provider value={values} key={index}>
            <ChildC />
          </UserCount.Provider>
        );
      })}
      <div></div>
      <button onClick={addHandler}>ChildCを追加</button>
    </>
  );
}