// code your solution here
function saturdayFun(x = "roller-skate") {
  let funValue = `This Saturday, I want to ${x}!`;
  console.log(funValue);
  return funValue;
}
// saturdayFun();
// saturdayFun((x = "bathe my dog"));

const mondayWork = function (y = "go to the office") {
  let toDo = `This Monday, I will ${y}.`;
  console.log(toDo);
  return toDo;
};
mondayWork();
mondayWork((y = "work from home"));

function wrapAdjective(q = "*") {
  return function (w = "special") {
    return `You are ${q}${w}${q}!`;
  };
}
wrapAdjective("||")("a dedicated programmer");
