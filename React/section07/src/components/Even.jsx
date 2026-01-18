import {useEffect} from "react"

const Even = () => {
  useEffect(()=>{
    // 클린업, 정리함수 => useEffect의 실행이 끝날 때 실행이 됨
    return (() => {
      console.log("unmount")
    })
  }, [])
  return <div>짝수입니다</div>
}

export default Even