
import regular from "./utils/regular";
import files from "./utils/files";
import means from "./utils/means";

const Person = function() { };

Person.prototype = means;
Person.prototype = files;
Person.prototype = regular;
// let meansItem = new Person();

export default new Person();
// export default {
//   ...regular,
//   ...files,
//   ...means
// };


