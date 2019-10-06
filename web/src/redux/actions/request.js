// to niżej to pomocnicza funkcja do tworzenia typów
// function requestType(action) {
//   return "REQUEST_" + action;
// }

// to jest tzw. higher order action creator - funkcja, która zwraca mi action creator
// i przy okazji typ akcji
// przydatne kiedy tworzysz kilka bardzo podobnych action creatorow
// tak samo możesz tworzyć higher order reducery :P
// function higherOrderRequest(action) {
//   return {
//     func: () => (
//       {
//         action: requestType(action);
//       }),
//     action: requestType(action);
//   }
// }
// tworze action cretory i typy
// const start = higherOrderRequest("START");
// const end = higherOrderRequest("END");
// eksportuje - chodź do fetch user
// export start.func as startRequest;
// export start.action as REQUEST_START;
// export end.func as endRequest;
// export end.action as REQUEST_END;
