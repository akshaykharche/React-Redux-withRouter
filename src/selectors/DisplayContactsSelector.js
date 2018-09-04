//import { createSelector } from 'reselect'
export const getUsers = state => state.users && state.users.users;
// export const getDisplayRecords = state => state.users && state.users.display;

// export const getRecordsToDisplay = createSelector(
//     [getDisplayRecords],
//     (display) => {
//         if (display) {
//             return display.filter(val => {
//                 let keys = Object.keys(val);
//                 let updatedValue = [];
//                 if (keys.includes("general") && keys.includes("job") && keys.includes("contact")) {
//                     updatedValue = val;
//                 }
//                 return updatedValue;

//             })
//         }

//     }
// );