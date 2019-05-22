export default function changeLocation(location) {
  return {
    type: "SET_LOCATION",
    payload: location
  };
}


// expect(changeLocation("Seattle, WA")).toBe({
//   type: "SET_LOCATION",
//   payload: "Seattle"
// });

// expect(changeLocation("Seattle, WA"))toEqualSnapShot()