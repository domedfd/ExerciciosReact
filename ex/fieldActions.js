export function changeValue(e) {
  console.log("changeLog");
  return {
    type: "VALUE_CHANGED",
    payload: e.target.value
  };
}
