export default function locationReducer(state = "Seattle, WA", action) {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}

// test("locationReducer", () => {
//   expect(
//     locationReducer("Seattle, WA", {
//       type: "SET_LOCATION",
//       payload: "San Francisco, CA"
//     })
//   ).toBe("San Francisco, CA");
// });
