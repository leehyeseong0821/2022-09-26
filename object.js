/** @format */

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

let validStatus = [false, false, false, false, false];

button.onclick = () => {
  inputs.forEach((input, index) => {
    validStatus[index] = !inputIsEmpty(input.value);
  });

  if (validStatus.includes(false)) {
    for (let i = 0; i < validStatus.length; i++) {
      if (!validStatus[i]) {
        alert(inputs[i].placeholder + "이 입력되지 않았습니다.");
        break;
      }
    }
  } else {
    alert("검사 완료");
  }
};

function inputIsEmpty(str) {
  return str == null || str == "" || str == undefined;
}

/*
Array 사용해야한다.
검사하기를 눌렀을때 모든 input에 값이 입력되어 있어야만
검사완료 메세지를 보여준다.

만약 하나라도 입력되지 않으면 순서대로 입력되지않았습니다. "메세지 출력" 
*/
